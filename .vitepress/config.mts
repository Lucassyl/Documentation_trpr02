import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Travail pratique 02",
  description: "Jeux video de pirate pour le Travail pratique 2",
  base: '/appweb-trpr02/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Recit',
        items: [
          { text: 'Recit 1 à 2 Menu', link: '/1-2 menu-doc' },
          { text: 'Recit 3 à 4 Selection', link: '/3-4 selection-doc' },
          { text: 'Recit 5, 12 à 14 Jeux', link: '/5 12-14 jeux-doc' },
          { text: 'Recit 6 à 10 Mission', link: '/6-10 mission-doc' },
          { text: 'Recit 15 Reparation', link: '/15 reparation-doc' }
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
