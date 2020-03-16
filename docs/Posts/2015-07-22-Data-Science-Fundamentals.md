---
layout:    post
pagename:  2015-07-22-Data-Science-Fundamentals
title:     Data Science Fundamentals
parent:    Posts
nav_order: -3
---

I'm a [data scientist at Microsoft](http://www.linkedin.com/in/ptotheraff), in the ExP platform. We constantly interview and hire for other data scientists, and it's tough to get quality people.

With all the hotness around data science, it's inevitable that a bunch of schools are opening up special programs around data science, but the shit that most people forget to realize is that **data science is built upon mathematics**.

So if you don't know your fundamentals in math, then you're fucked. You can probably get away for a while producing some data porn, but in whatever soon-to-be-failed startup you join, you will get some data and end up **describing it**, even though the real value is in making **useful conclusions** from it.

It's tough to do an interview that involves actual data analysis in an on-site interview (some firms give homework-like exercises; we don't although I do like the idea) but let's go through some problems we ask and why we like them.

_A bus runs every 15 minutes outside my apartment. If I come down at some random time, how long, on average, will I have to wait before I catch a bus?_

Plenty of people I have interviewed can't even give me their intuition on what the answer is, which usually implies that the candidate is going home without a job offer.

Even for those that have the intuition for the answer, getting it rigorously is still problematic for most, because they can't comprehend **what it means**. What are we describing here? We have a certain amount of time we're waiting, and it's unknown. This is a _random variable_. In our scenario, this follows the uniform distribution $Unif(0, 15)$, and so once we are here we simply plug and play:

$$ E[Unif(0, 15)] = \int_0^{15} x\left(\frac{1}{15}\right)dx $$

Check it out on [Wolfram Alpha](https://www.wolframalpha.com) in case you can't do it yourself, but math don't lie: it's 7.5.

Okay - so this was only the warm-up for the actual problem. Next time - the real problem.
