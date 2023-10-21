import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GA_TRACKING_ID } from '@/libs/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      GA_TRACKING_ID.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
