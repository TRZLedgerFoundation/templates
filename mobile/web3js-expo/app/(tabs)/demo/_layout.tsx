import { WalletUiDropdown } from '@/components/trezoa/wallet-ui-dropdown'
import { Stack } from 'expo-router'
import React from 'react'

export default function DemoLayout() {
  return (
    <Stack screenOptions={{ headerTitle: 'Demo', headerRight: () => <WalletUiDropdown /> }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}
