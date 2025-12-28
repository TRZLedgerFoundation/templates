import { ThemeProvider } from '@/components/theme-provider'
import { ReactQueryProvider } from './react-query-provider'
import { TrezoaProvider } from '@/components/trezoa/trezoa-provider'
import React from 'react'

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TrezoaProvider>{children}</TrezoaProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}
