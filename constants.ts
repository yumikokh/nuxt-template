export const BASE_DIR = process.env.BASE_DIR || ''
export const URL = `https://example.com${BASE_DIR}`

export const BREAKPOINT = 960

export const HEAD = (env: any) => {
  const TITLE = 'title'
  const DESCRIPTION = 'description'

  const OGP_IMAGE_URL = `${URL}ogp.jpg`
  const OGP_TITLE = 'ogp title' || TITLE
  const OGP_URL = URL
  const OGP_DESCRIPTION = 'ogp description' || DESCRIPTION

  // const FONT_KIT_ID = 'jcb7yuj' // TODO: 差し替え

  return {
    title: TITLE,
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width',
      },
      { hid: 'description', name: 'description', content: DESCRIPTION },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: OGP_TITLE },
      { hid: 'og:site_name', property: 'og:site_name', content: OGP_TITLE },
      { hid: 'og:image', property: 'og:image', content: OGP_IMAGE_URL },
      { hid: 'og:image:width', property: 'og:image:width', content: 1200 },
      { hid: 'og:image:height', property: 'og:image:height', content: 630 },
      { hid: 'og:url', property: 'og:url', content: OGP_URL },
      {
        hid: 'og:description',
        property: 'og:description',
        content: OGP_DESCRIPTION,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: OGP_TITLE },
      { hid: 'twitter:image', name: 'twitter:image', content: OGP_IMAGE_URL },
      {
        hid: 'twitterDescription',
        property: 'twitter:description',
        content: OGP_DESCRIPTION,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${BASE_DIR}favicon.ico` },
      { hid: 'canonical', rel: 'canonical', href: URL },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&display=swap',
      // },
      // { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png'},
    ],

    // script: [
    //   {
    //     hid: 'adobefont',
    //     src: `https://use.typekit.net/${FONT_KIT_ID}.js`,
    //   },
    // ],
  }
}
