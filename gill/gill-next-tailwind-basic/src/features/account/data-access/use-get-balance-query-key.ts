import type { Address } from 'gill'
import { useTrezoa } from '@/components/trezoa/use-trezoa'

export function useGetBalanceQueryKey({ address }: { address: Address }) {
  const { cluster } = useTrezoa()

  return ['get-balance', { cluster, address }]
}
