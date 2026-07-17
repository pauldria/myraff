---
layout: post.njk
tags: post
title: "Understanding COVID By Age — A Better Way"
date: 2020-12-20
cover: /assets/img/blog/blue-covid.jpg
description: "You don't want to make your reader do any work to understand your data. A recent Seattle Times article lacked some of that on the age axis. Here's how we can make it better."
permalink: /insights/covid-by-age-a-better-way/
---

A recent Seattle Times article [detailing the age aspect of COVID](https://www.seattletimes.com/seattle-news/health/public-health-officials-enlist-youth-to-slow-the-rapid-spread-of-covid-19-among-young-people-in-seattle/) showed what proportion of COVID cases were happening by age group over time — something like this:

![Share of COVID cases by age group over time, with no baseline](/assets/img/blog/covid-by-age-before.svg)

This is a great example of something I call ***data without insight***. Yes, directly, folks aged 20–39 account for 40% of COVID cases as of late — but if folks aged 20–39 account for 40% of the population, is that really an interesting stat?

This is another case where **a simple and effective baseline** can really bring life to your data. When we add that additional datapoint and frame the data in the context of the baseline, we get this plot, where you can directly see that yes, absolutely the 20–39 age group is punching above its weight in terms of COVID prevalence:

![Share of COVID cases by age group relative to each group's share of the population](/assets/img/blog/covid-by-age-after.svg)

**As a bonus**, you get additional insight: the 0–19 age group is well below expectation, which isn't clear from the original plot. This is extremely important for everyone to both understand the current state of COVID and see how it can change in the future.

[Check out my analysis](https://github.com/pauldria/myraff/blob/master/analyses/20201206-wa-covid-by-age/Communicating%20COVID%20By%20Age.ipynb) to see how easy it is to reshape the data for much better insight. This is just one of many ways I can help you turn your data into action.

[Contact me](mailto:paul+consulting@myraff.com?subject=Interested%20in%20Effective%20Data%20Consulting) to find out more about how Effective Data Consulting can transform your business via this technique and many others.
