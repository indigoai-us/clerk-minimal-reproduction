import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark
      }}
      >
      <Component {...pageProps} />
    </ClerkProvider>
  )
}
