# Paul Raff's Personal Page

Built with [Hydejack](https://github.com/hydecorp/hydejack).

# Details of the Site

## Nav

* **Basic pages** - [\_config.yml](./_config.yml) has the `menu` section where each `url` maps to a subdirectory. The default page is `README.md` in each subdirectory, and other files can be used for additional nav. 
* **Posts** - posts are organized by categories, each one defined in `_featured_categories`. The category name should be its own subdirectory, for example `insights`. Posts are markdown files in the `_posts` subdirectory. 

## New Posts

All that's minimally necessary is a new file with filename format `YYYY-MM-DD-<custom>.md`. Posts will be ordered by date implied in the files. 