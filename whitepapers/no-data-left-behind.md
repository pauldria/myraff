---
layout: page
title: White Paper - No Data Left Behind
description: When dealing with data, don't leave any behind. Learn the best practices and techniques to manage this.
hide_description: true
permalink: whitepapers/no-data-left-behind/
sitemap: false
---

## Introduction

_"Hey - can you help me understand this data?"_ is an all-too-common question Data Scientists face in their day-to-day interactions with the business. In order to trust the data, you must understand the data, and to understand the data, you must understand it completely.

**No Data Left Behind (NDLB)** is a technique and a set of principles that all good data-driven institutions utilize, consisting of the following four themes:
1. Don't drop data - all data that comes into the system must be available somewhere for inspection and analysis.
2. Use [VIEW](https://en.wikipedia.org/wiki/View_(SQL))s - clear, canonical ways in which the data should be accessed for consumption.
3. Distinguish raw values from processed values in your data.
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

<mark>Even if you consider yourself a well-run data shop, it only takes one critical error to undo years of progress in your data systems and insights. To effectively leverage data, _everyone_ must trust the data and fair or not, one error can bring into question everything else about your systems.</mark>