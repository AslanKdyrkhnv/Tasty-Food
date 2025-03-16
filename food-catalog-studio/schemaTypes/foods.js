const foods = {
  title: 'Foods',
  name: 'foods',
  type: 'document',
  fields: [
    {
      title: 'Food name',
      name: 'foodname',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'A little desiciption',
      name: 'foodDesc',
      type: 'text',
      options: {
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Food Image',
      name: 'foodImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {
        type: 'category',
      },
    },
  ],
}

export default foods
