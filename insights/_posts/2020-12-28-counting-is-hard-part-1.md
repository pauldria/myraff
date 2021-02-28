---
layout: post
title: Counting is Hard, Part 1
image: /assets/img/blog/horse-to-water.jpg
description: >
  The best way to count is the way that everyone agrees upon. 
sitemap: false
---

For 6 years I worked in the Analysis and Experimentation group at Microsoft, colloquially known as ExP. I spent a lot of time working with teams on their metrics and their ***story of success***. One of the main blurbs we would always say is "Counting is hard".

Why is it hard? In this first installment of the series, I'll walk through a simple example to get straight to the point.

**The Setup:** You're an exec at HBO, wondering where to invest your money on additional shows for your hit series. In this simple world, there are only two shows that are being shown at HBO: _Game of Thrones_ and _Sex and the City_. 

**The Data:** You ask your favorite data scientist (me) to pull some basic data on viewership for these shows, and we get this data for the total membership of HBO, strangely consisting of only 5 people:

| Person | Minutes Watching _Game of Thrones_ | Minutes Watching _Sex and the City_ |
|--------|------------------------------------|-------------------------------------|
| Alice  | 60                                 | 0                                   |
| Bob    | 60                                 | 0                                   |
| Charles | 60                                | 60                                  |
| Daphne | 30                                 | 90                                  |
| Eleanor | 30                                | 90                                  |
| **Total** | **240**                         | **240**                             |

How do we compare _Game of Thrones_ and _Sex and the City_? Well, in plenty of different ways. Let's look at a few, giving ourselves one rule in that we must assign percentages to each to add up to 100%. 

| Method | Description and Calculation |
|--------|-----------------------------|
| All-up minutes | All that matters is the total number of minutes. _Game of Thrones_ and _Sex and the City_ each get 50%. |
| All-up watchers | Each show gets a point for each watcher, regardless of how much they watched. So _Game of Thrones_ gets 5 points and 62.5%, and _Sex and the City_ gets 3 points and 37.5%. |
| Weighted watchers | Each watcher gets a weighting based on their minutes, and each show is averaged up over all its watchers. So, for example, Daphne is 25%/75%. In this, _Game of Thrones_ is 60% and _Sex and the City_ is 40%. |

We quickly and easily came up with three different methodologies, each giving different numbers. What's the deal? 

Bad teams spend a lot of time and energy debating these different methodologies, most likely with ulterior motives. Imagine if the executives covering _Game of Thrones_ were in a completely different organization with _Sex and the City_. 

Great teams understand a couple of key, critical points:
* **They can all work** - if counting is easy, then why not compute them all?
* **It's not about the metric, it's about how it moves** - 

[Contact Me](mailto:paul+consulting@myraff.com?subject=Interested%20in%20Effective%20Data%20Consulting) to find out more about how Effective Data Consulting can transform your business via this technique and many others. 