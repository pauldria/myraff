module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });

  // Current year, for the footer.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Human-readable date, e.g. "December 20, 2020".
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // Newest-first list of blog posts.
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("post").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
