// These styles apply to every route in the application
//import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "@/styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
