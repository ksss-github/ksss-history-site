const timeline = {
  name: 'timeline',
  title: 'Timeline event',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Title of the event."
    },
    // {
    //   name: "tags",
    //   title: "Tags",
    //   description: "Tags for categorizing the event and filter. At least one tag is required.",
    //   validation: (Rule) => Rule.required(),
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    //   options: {
    //     list: [
    //       { title: "Main timeline", value: "main-timeline" },
    //       { title: "Gotland Runt", value: "gotland-runt" },
    //       { title: "Racing", value: "racing" },
    //     ],
    //     layout: "grid",
    //   },
    // },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{
        type: "reference",
        to: [{ type: "tags" }]
      }]
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required().error("Slug is generated from the title and must be unique. Please provide a title for this event that is not already in use and click again on generate slug."),
      options: { source: "title" },
      description: "URL path id for this event - click on generate after filling the title."
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      validation: (Rule) => Rule.required(),
      description: "Date when the event took place."
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      description: "Location where the event took place."
    },
    {
      title: "Content",
      name: "content",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          title: "Block",
          name: "block",
          type: "block"
        }
      ],
      description: "Content of the event."
    },
    {
      name: "image",
      title: "Timeline Preview Image",
      type: "image",
      description: "Upload preview image for the timeline block.",
      options: { hotspot: true }, 
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: 'gallery',
      type: 'array',
      of: [
        { type: 'image', fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ] }
      ],
      options: {
        layout: 'grid'
      },
      description: "Upload or drag and drop images here."
    },
    {
      title: "Related Links",
      name: "relatedLinks",
      type: "array",
      of: [
        {
          type: "string"
        }
      ],
      description: "Add links related to the event."
    }
  ]
}

export default timeline