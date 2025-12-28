'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { TrezoaProvider } from '@/components/trezoa/trezoa-provider'
import React from 'react'

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TrezoaProvider>{children}</TrezoaProvider>
    </ThemeProvider>
  )
}
