import { Button, View } from 'react-native'
import React from 'react'
import { TrezoaCluster } from '@wallet-ui/react-native-web3js'
import { appStyles } from '@/constants/app-styles'

export function NetworkUiSelect({
  networks,
  selectedNetwork,
  setSelectedNetwork,
}: {
  networks: TrezoaCluster[]
  selectedNetwork: TrezoaCluster
  setSelectedNetwork: (network: TrezoaCluster) => void
}) {
  return (
    <View style={appStyles.stack}>
      {networks
        .filter((i) => i.id !== selectedNetwork.id)
        .map((network) => (
          <View key={network.id}>
            <Button
              disabled={selectedNetwork.id === network.id}
              onPress={() => setSelectedNetwork(network)}
              title={`Connect to ${network.label}`}
            />
          </View>
        ))}
    </View>
  )
}
