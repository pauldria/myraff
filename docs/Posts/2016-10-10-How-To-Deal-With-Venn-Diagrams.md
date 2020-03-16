---
layout:    post
pagename:  2016-10-10-How-To-Deal-With-Venn-Diagrams
title:     How to Deal with Venn Diagrams
parent:    Posts
nav_order: -5
---

This blog post is primarily for my niece Katya, who was asked this nice problem in her homework:

_In a camp, there are 79 kids; 27 of them are younger than twelve, 33 are girls, and 30 are boys that are twelve or older. Fill in this chart:_

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |       |      |     |
| Twelve or older     |       |      |     |
| All                 |       |      |     |

The real question was to demonstrate that **this chart can only be filled in only one possible way**. So great, let's first enter in what we know:

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |       |      | 27  |
| Twelve or older     |       | 30   |     |
| All                 |  33   |      | 79  |

Now, since the **All** must be equal to the sum of the parts, you have enough information to find out two of the cells, namely

|                     | Girls | Boys                       | All                       |
|-------------------- |-------|----------------------------|---------------------------|
| Younger than twelve |       |                            | 27                        |
| Twelve or older     |       | 30                         | **I must be 79-27-52**    |
| All                 |  33   | **I must be 79-33=46**     | 79                        |

Now we're here:

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |       |      | 27  |
| Twelve or older     |       | 30   | 52  |
| All                 |  33   | 46   | 79  |

Then there are two more cells we know:

|                     | Girls                       | Boys                       | All |
|-------------------- |-----------------------------|----------------------------|-----|
| Younger than twelve |                             | **I must be 46-30=16**     | 27  |
| Twelve or older     | **I must be 52-30=22**      | 30                         | 52  |
| All                 |  33                         | 46                         | 79  |

Now we're here and finally you know the last cell:

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |       | 16   | 27  |
| Twelve or older     |  22   | 30   | 52  |
| All                 |  33   | 46   | 79  |

There are two ways in which we can fill the last cell - either 33-22 or 17-16 - but either way it's 11! That's no coincidence. Now we have the full table:

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |  11   | 16   | 27  |
| Twelve or older     |  22   | 30   | 52  |
| All                 |  33   | 46   | 79  |

Now let's go back to the original question: **why was there only one way to generate this table?** Remember at each step above there was no choice in what we were able to do. From the outset certain cells **were already forced to be a certain value**. As we calculated what those values were, new cells had the same property and we really had no **choice** at all while filling in the table.

So, from a fifth grader's perspective that's sufficient. But realize that this is, at the core, a question about [degrees of freedom](https://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)). We were given a matrix and the **constraint** that the last entry in each row must be the sum of the other elements, and the same situation holds for columns. And we showed that once you know 4 entries in the table, you know them all. 

But not quite - you must be given 4 **independent** entries from the table. For example, you could start with this information and still generate the full table:

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |  11   | 16   |     |
| Twelve or older     |  22   | 30   |     |
| All                 |       |      |     |

However, you can't start here and fill out the whole table:

|                     | Girls | Boys | All |
|-------------------- |-------|------|-----|
| Younger than twelve |  11   | 16   | 27  |
| Twelve or older     |  22   |      |     |
| All                 |       |      |     |

What's the difference? Think about putting the entries in one at a time. Once you have 11 and 16 in the table above, **adding in 27 to the table doesn't count as adding in new information**. It doesn't count because it's already established. 