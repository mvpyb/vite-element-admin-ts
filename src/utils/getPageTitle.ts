import defaultSettings from '@/settings'
const title = defaultSettings.title || 'Vite Element Admin'

export default function getPageTitle( pageTitle?: string ): string {
  if ( pageTitle ) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
