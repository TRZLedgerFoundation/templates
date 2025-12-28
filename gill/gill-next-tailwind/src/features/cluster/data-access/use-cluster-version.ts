import { useQuery } from '@tanstack/react-query'
import { useTrezoa } from '@/components/trezoa/use-trezoa'

export function useClusterVersion() {
  const { client, cluster } = useTrezoa()
  return useQuery({
    retry: false,
    queryKey: ['version', { cluster }],
    queryFn: () => client.rpc.getVersion().send(),
  })
}
