module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/theme.css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy({ "src/decks/cod": "courses/cod" });
 
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
  };
};
 