import { Address } from 'gill'

import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { AccountUiModalAirdrop } from './account-ui-modal-airdrop'
import { AccountUiModalReceive } from './account-ui-modal-receive'
import { AccountUiModalSend } from './account-ui-modal-send'
import { ErrorBoundary } from 'react-error-boundary'

export function AccountUiButtons({ address }: { address: Address }) {
  const { account, cluster } = useTrezoa()

  return account ? (
    <div>
      <div className="space-x-2">
        {cluster.id === 'trezoa:mainnet' ? null : <AccountUiModalAirdrop address={address} />}
        <ErrorBoundary fallback={null}>
          <AccountUiModalSend account={account} address={address} />
        </ErrorBoundary>
        <AccountUiModalReceive address={address} />
      </div>
    </div>
  ) : null
}
