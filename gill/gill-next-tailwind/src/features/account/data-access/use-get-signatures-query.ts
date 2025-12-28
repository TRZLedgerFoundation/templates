import type { Address } from 'gill'
import { useQuery } from '@tanstack/react-query'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { useGetSignaturesQueryKey } from './use-get-signatures-query-key'

export function useGetSignaturesQuery({ address }: { address: Address }) {
  const { client } = useTrezoa()

  return useQuery({
    queryKey: useGetSignaturesQueryKey({ address }),
    queryFn: () => client.rpc.getSignaturesForAddress(address).send(),
  })
}
