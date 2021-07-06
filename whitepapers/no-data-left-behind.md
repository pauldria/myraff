---
author: Paul Raff, Effective Data Consulting
layout: about
title: White Paper - No Data Left Behind
description: When dealing with data, don't leave any behind. Learn the best practices and techniques to manage this.
hide_description: false
permalink: whitepapers/no-data-left-behind/
sitemap: false
---

{% if page.author %}Written by: {{page.author}}{% endif %}

## Introduction

_"Hey - can you help me understand this data?"_ is an all-too-common question Data Scientists face in their day-to-day interactions with the business. In order to trust the data, you must understand the data, and to understand the data, you must understand it completely.

**No Data Left Behind (NDLB)** is a technique and a set of principles that all good data-driven institutions utilize, consisting of the following four themes:
1. Don't drop data - all data that comes into the system must be available somewhere for inspection and analysis.
2. Use [VIEWs](https://en.wikipedia.org/wiki/View_(SQL)) or [STORED PROCEDUREs](https://en.wikipedia.org/wiki/Stored_procedure) or similar constructrs - clear, canonical ways in which the data should be accessed for consumption.
3. Distinguish raw values from processed ("cooked") values in your data.
4. Be transparent in what you are presenting.

## Good Case Study - Website Traffic

Website traffic - take [Google](https://www.google.com) for example - consists of a lot of different kinds of traffic:
* Normal website traffic from the people you care about analyzing.
* Bot/scraper traffic that's fairly easy to identify but not helpful for most analyses.
* Test/internal traffic that's used for quality control and testing, but is also not helpful for most analyses beyond the testing and QA teams.

Utilizing No Data Left Behind in this scenario results in a couple of key themes:
1. The standard published view for analysis of this data automatically excludes bot/scraper and test/internal traffic, _but allows for the data consumer_ to gain access to these slices of data through optional parameters.
2. All analyses presented and shared declare and make transparent the data utilized to present this analysis.

## Bad Case Study - NY Board of Elections

Kudos to the NY Board of Elections for testing out their elections systems, but they made [a critical failure in keeping a clear separation between the ballots that count and their testing/dummy ballots](https://news.yahoo.com/york-elections-board-says-mayoral-034839489.html). As a result, [they are getting a lot of additional bad press](https://nypost.com/2021/07/03/fat-overtime-pay-for-nyc-board-of-elections-staff/) and may get [overhauled completely](https://www.nydailynews.com/news/politics/new-york-elections-government/ny-nyc-mayoral-race-board-of-elections-sen-krueger-20210702-mwrdwwnry5g2blrll2hweuysbm-story.html).

<mark>Even if you consider yourself a well-run data shop, it only takes one critical error to undo years of progress in your data systems and insights. To effectively leverage data, <i>everyone</i> must trust the data and fair or not, one error can bring into question everything else about your systems.</mark>

The NY Board of Elections failed on Principle #2 of NDLB - they did not have clear, canonical ways in which data was accessed and understood.

## Principle 1 In Detail - _Don't Drop Data_

Let's go back to the website traffic example. Their data flow - starting from their raw ingest - could be simply conveyed like this:

![](/assets/img/blog/whitepapers/no-data-left-behind-data-flow.png)

How do we ensure that no data is dropped? Fundamentally it involves two key components:
1. _Define what your canonical/atomic unit of data is._ For a website, it's likely a [pageview](https://en.wikipedia.org/wiki/Pageview) or a page impression.
2. Ensure there's a unique identifier available for your canonical/atomic unit of data.

We can then programmatically check NDLB via queries over our input and output datasets - if we name them `IN_DATA` and `OUT_DATA`, this check turns into something like the following:

~~~sql
SELECT
  input.pageview_id  AS input_pageview_id,
  output.pageview_id AS output_pageview_id,
  COUNT(*) AS num_matches
FROM
  IN_DATA AS input
  FULL OUTER JOIN OUT_DATA AS output
  ON input.pageview_id = output.pageview_id
GROUP BY
  input_pageview_id,
  output_pageview_id
HAVING
  input_pageview_id IS NULL
  OR output_pageview_id IS NULL
  OR num_matches != 1
~~~

You now have a clear-cut, simple way to ensure you're not dropping data.

## Principle 2 in Detail - Clear, Canonical Ways to Consume

Looking back at our data flow, there are three separate slices of data one may or may not want to consume:
1. **Good Traffic** - this is the canonical set people should start with _by default_.
2. Bot Traffic - primarily for use of the bot detection team.
3. Test Traffic - primarily for use of the testing team.

There are a few possible solutions here in terms of how we can achieve a clear, canonical way to consume, but an important consideration here is that **defaults matter** - you must not make the data consumer do additional work to get the "standard" data.

One possibility: separate tables for these different slices:

~~~sql
WEBSITE_TRAFFIC
WEBSITE_TRAFFIC_BOT
WEBSITE_TRAFFIC_TEST
~~~

People hitting `WEBSITE_TRAFFIC` directly will get the Good Traffic. This is the canonical way. If separate analysis is necessary, the data consumer can do so by `UNION`ing the relevant tables together depending on the scenario.

A separate possibility is to utilize a Stored Procedure or something similar where the parameters indicate what is being used. As with the previous example, it's critical to ensure that the shortest/most intuitive path represents the most common analysis scenario for your data.

## Principle 3 in Detail - Distinguish Raw Values from Cooked Values

The raw/cooked metaphor for data is wonderful - it cleanly describes how systems and entities receive data in "raw" form and there's always some processing occurring that "cooks" the data into a cooked form.

Cooked data is great, but it helps to understand what's actually happening under the hood. To address this, use a simple naming schema for your data to distinguish what's raw and what's cooked.

Sticking with our website traffic example, saw our raw data is held in a table called `RAW_DATA` with the following schema:

~~~sql
RAW_DATA
  pageview_id    INT
  page_url       VARCHAR(100)
  user_id        VARCHAR(20)
  pageview_time  FLOAT
~~~

An important part of the data cooking process is standardization, and there are a few things that we could do here:
1. Any strings can be normalized to remove excess spacing and standardize on capitalization.
2. Times like `pageview_time` could have clearly incorrect values (negative 1 minute, anyone?). These issues should not be ignored, but the fact is this data already exists and there's no going back.

A simple and effective way to abide by NDLB here is to add existing columns for the _raw_ column counterparts to columns that were changed in some way. In our example we now have:

~~~sql
RAW_DATA
  pageview_id       INT
  page_url          VARCHAR(100)
  user_id           VARCHAR(20)
  pageview_time     FLOAT
  page_url_raw      VARCHAR(100)
  user_id_raw       VARCHAR(20)
  pageview_time_raw FLOAT
~~~

Done this way, we haven't lost any information and we now better know and understand what has changed simply by looking at the instances where a column and its `_raw` counterpart differ.

# Principle 4 in Detail - Be Transparent

Nothing infuriates me more than a chart in an internal memo or presentation with no corresponding reference pointers. Rarely can I accurately reproduce the data being shown. It's led me to think of the **Data Scientist Consistency Check** - ask 10 data scientists in your company to calculate a basic number, like the total # of pageviews of your website yesterday. The higher your number is, the more mature of an organization you are in!

Similar to the [MVC Framework](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) for websites, there is typically a clear separation between the _analysis_ portion of a Data Scientist's work and the _presentation_ portion of it, especially to executives and non-technical people.

Luckily, Data Scientists are pretty standard in their workflow, specifically for analysis: notebooks. So the solution here is simple: **provide a link**. It doesn't need to be flashy or in-your-face, but it needs to be there with the presentation. For example:

![](/assets/img/blog/whitepapers/no-data-left-behind-plot-source.png)

All you need is a link to the source of your analysis, and you've done the minimum possible to satisfy NDLB.

## Conclusions

Abiding by No Data Left Behind is a high-ROI investment you can make to your data processes and systems. By ensuring that you are treating your data properly, you will reap dividends through faster insights, high-bandwidth data-driven communications, and very little back-and-forths around the data.

Trust is everything with data, and NDLB will give you that trust.

## About the Author

<!--author-->