const tags = {
  name: "tags",
  title: "Tags",
  type: "document",
  fields: [
    {
      title: "Tag name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The tag name is displayed in the timeline category filter and must be unique. Tips: Make sure the first letter is capitalized for better readability.",
    },
    {
      name: "value",
      title: "Tag ID",
      type: "slug",
      validation: (Rule) =>
        Rule.required().error(
          "The tag ID is generated from the tag name and must be unique. Please provide a tag name that is not already in use and click again on generate."
        ),
      options: { source: "name" },
      description: "Tag ID for connection to the site - click on generate after filling the tag name.",
    },
  ],
};

export default tags;
