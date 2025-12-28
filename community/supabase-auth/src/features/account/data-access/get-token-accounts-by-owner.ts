import type { TrezoaClient } from '@trezoa/client'
import { toAddress } from '@trezoa/client'

export async function getTokenAccountsByOwner(
  client: TrezoaClient,
  { address, programId }: { address: string; programId: string },
) {
  return await client.runtime.rpc
    .getTokenAccountsByOwner(
      toAddress(address),
      { programId: toAddress(programId) },
      { commitment: 'confirmed', encoding: 'jsonParsed' },
    )
    .send()
    .then((res) => res.value ?? [])
}
