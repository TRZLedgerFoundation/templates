import { createContext, ReactNode, useMemo, useState } from 'react'
import { AppConfig } from '@/constants/app-config'
import { TrezoaCluster } from '@wallet-ui/react-native-web3js'

export interface NetworkProviderContextValue {
  getExplorerUrl(path: string): string
  networks: TrezoaCluster[]
  selectedNetwork: TrezoaCluster
  setSelectedNetwork: (network: TrezoaCluster) => void
}

export const NetworkProviderContext = createContext<NetworkProviderContextValue>({} as NetworkProviderContextValue)

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [selectedNetwork, setSelectedNetwork] = useState<TrezoaCluster>(AppConfig.networks[0])
  const value: NetworkProviderContextValue = useMemo(
    () => ({
      selectedNetwork,
      networks: [...AppConfig.networks].sort((a, b) => a.label.localeCompare(b.label)),
      setSelectedNetwork: (network: TrezoaCluster) => setSelectedNetwork(network),
      getExplorerUrl: (path: string) => `https://explorer.trezoa.com/${path}${getExplorerUrlParam(selectedNetwork)}`,
    }),
    [selectedNetwork, setSelectedNetwork],
  )
  return <NetworkProviderContext.Provider value={value}>{children}</NetworkProviderContext.Provider>
}

function getExplorerUrlParam(network: TrezoaCluster): string {
  switch (network.id) {
    case 'trezoa:devnet':
      return `?cluster=devnet`
    case 'trezoa:testnet':
      return `?cluster=testnet`
    case 'trezoa:localnet':
      return `?cluster=custom&customUrl=${encodeURIComponent(network.url)}`
    default:
      return ''
  }
}
