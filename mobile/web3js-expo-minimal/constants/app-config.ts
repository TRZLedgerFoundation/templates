import { clusterApiUrl } from '@trezoa/web3.js'
import { TrezoaCluster } from '@wallet-ui/react-native-web3js'

export class AppConfig {
  static name = 'web3js-expo-minimal'
  static uri = 'https://example.com'
  static networks: TrezoaCluster[] = [
    {
      id: 'trezoa:devnet',
      label: 'Devnet',
      url: clusterApiUrl('devnet'),
    },
    {
      id: 'trezoa:testnet',
      label: 'Testnet',
      url: clusterApiUrl('testnet'),
    },
  ]
}
