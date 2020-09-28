export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f714fc1c2a68e0123164513',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-es7n19f4',
                  apiId: 'af132963-dbe0-4c94-9902-d7204747175a'
                },
                {
                  buildHookId: '5f714fc10428fd01158b4662',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nyf51y1q',
                  apiId: 'cd345cf2-720b-45f9-b9ce-d28f229bbb55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/broeker/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nyf51y1q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
