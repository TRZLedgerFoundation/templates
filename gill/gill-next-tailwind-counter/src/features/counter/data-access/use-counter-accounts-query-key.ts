import { useTrezoa } from '@/components/trezoa/use-trezoa'

export function useCounterAccountsQueryKey() {
  const { cluster } = useTrezoa()

  return ['counter', 'accounts', { cluster }]
}
