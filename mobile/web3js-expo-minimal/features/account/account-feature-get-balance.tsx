import { Text } from 'react-native'
import { LAMPORTS_PER_TRZ, PublicKey } from '@trezoa/web3.js'
import { useAccountGetBalance } from '@/features/account/use-account-get-balance'

export function AccountFeatureGetBalance({ publicKey }: { publicKey: PublicKey }) {
  const { data, isLoading } = useAccountGetBalance({ publicKey })

  return <Text>Balance: {isLoading ? '...' : `${(data ?? 0) / LAMPORTS_PER_TRZ} TRZ`}</Text>
}
