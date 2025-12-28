import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { NetworkProvider } from '@/features/network/network-provider'
import { MobileWalletAdapterProvider } from '@wallet-ui/react-native-web3js'
import { useNetwork } from '@/features/network/use-network'

const queryClient = new QueryClient()
export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <TrezoaNetworkProvider>{children}</TrezoaNetworkProvider>
      </NetworkProvider>
    </QueryClientProvider>
  )
}

// We have this TrezoaNetworkProvider because of the network switching logic.
// If you only connect to a single network, use MobileWalletAdapterProvider directly.
function TrezoaNetworkProvider({ children }: PropsWithChildren) {
  const { selectedNetwork } = useNetwork()
  return (
    <MobileWalletAdapterProvider
      clusterId={selectedNetwork.id}
      endpoint={selectedNetwork.url}
      identity={{ name: 'Wallet UI Example Web3js Expo' }}
    >
      {children}
    </MobileWalletAdapterProvider>
  )
}
