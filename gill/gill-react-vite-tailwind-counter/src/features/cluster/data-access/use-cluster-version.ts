import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { useQuery } from '@tanstack/react-query'

export function useClusterVersion() {
  const { client, cluster } = useTrezoa()
  return useQuery({
    retry: false,
    queryKey: ['version', { cluster }],
    queryFn: () => client.rpc.getVersion().send(),
  })
}
