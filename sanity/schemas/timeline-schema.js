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
      name: 'gallery',
      type: 'array',
      of: [
        { type: 'image', fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          },
          { name: "caption", title: "Caption", type: "string", validation: (Rule) => Rule.required()}
        ] }
      ],
      options: {
        layout: 'grid'
      },
      description: "Upload or drag and drop images here. These images will be shown in the event's full page."
    },
    {
      title: "Related Links",
      name: "relatedLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              description: "Title of the link."
            },
            {
              title: "URL",
              name: "url",
              type: "url",
              description: "URL of the link must include full path. Example: http:// or https://."
            }
          ]
        }
      ],
      description: "Add links related to the event."
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
      title: "Timeline Preview Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required().max(200).warning("Description should be brief and not exceed 200 characters."),
      description: "Brief description of the event for the preview in the timeline. Max 200 characters."
    }
  ]
}

export default timeline