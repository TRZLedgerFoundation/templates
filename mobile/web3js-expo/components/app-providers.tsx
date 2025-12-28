import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ClusterProvider } from './cluster/cluster-provider'
import { TrezoaProvider } from '@/components/trezoa/trezoa-provider'
import { AppTheme } from '@/components/app-theme'
import { AuthProvider } from '@/components/auth/auth-provider'

const queryClient = new QueryClient()

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppTheme>
      <QueryClientProvider client={queryClient}>
        <ClusterProvider>
          <TrezoaProvider>
            <AuthProvider>{children}</AuthProvider>
          </TrezoaProvider>
        </ClusterProvider>
      </QueryClientProvider>
    </AppTheme>
  )
}
