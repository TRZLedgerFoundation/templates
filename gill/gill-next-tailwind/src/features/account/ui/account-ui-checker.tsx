import { address } from 'gill'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { AccountUiBalanceCheck } from './account-ui-balance-check'

export function AccountUiChecker() {
  const { account } = useTrezoa()
  if (!account) {
    return null
  }
  return <AccountUiBalanceCheck address={address(account.address)} />
}
