import type { Address } from 'gill'
import { useQuery } from '@tanstack/react-query'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { useGetBalanceQueryKey } from './use-get-balance-query-key'

export function useGetBalanceQuery({ address }: { address: Address }) {
  const { client } = useTrezoa()

  return useQuery({
    retry: false,
    queryKey: useGetBalanceQueryKey({ address }),
    queryFn: () => client.rpc.getBalance(address).send(),
  })
}
