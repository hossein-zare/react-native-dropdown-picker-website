module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'The Basics',
      items: ['changelog', 'installation', 'rules', 'usage', 'item-schema'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/placeholder',
        'advanced/icons',
        'advanced/loading',
        'advanced/search',
        'advanced/category',
        'advanced/modes',
        'advanced/dropdown-box',
        'advanced/list-and-items',
        'advanced/list-modes',
        'advanced/localization', 
        'advanced/themes'
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/close-other-pickers',
        'tutorials/multiple-pickers'
      ],
      collapsed: true,
    },
    'donation'
  ]
};