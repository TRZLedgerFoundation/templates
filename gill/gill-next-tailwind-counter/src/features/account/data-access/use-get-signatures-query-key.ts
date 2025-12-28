import type { Address } from 'gill'
import { useTrezoa } from '@/components/trezoa/use-trezoa'

export function useGetSignaturesQueryKey({ address }: { address: Address }) {
  const { cluster } = useTrezoa()

  return ['get-signatures', { cluster, address }]
}
