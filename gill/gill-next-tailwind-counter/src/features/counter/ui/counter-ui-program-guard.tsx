import { ReactNode } from 'react'

import { AppAlert } from '@/components/app-alert'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { useCounterProgram } from '@/features/counter/data-access/use-counter-program'

export function CounterUiProgramGuard({ children }: { children: ReactNode }) {
  const { cluster } = useTrezoa()
  const programAccountQuery = useCounterProgram()

  if (programAccountQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!programAccountQuery.data?.value) {
    return (
      <AppAlert>Program account not found on {cluster.label}. Be sure to deploy your program and try again.</AppAlert>
    )
  }

  return children
}
