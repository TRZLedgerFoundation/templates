import type { Address, TrezoaClient } from 'gill'

export async function getTokenAccountsByOwner(
  rpc: TrezoaClient['rpc'],
  { address, programId }: { address: Address; programId: Address },
) {
  return await rpc
    .getTokenAccountsByOwner(address, { programId }, { commitment: 'confirmed', encoding: 'jsonParsed' })
    .send()
    .then((res) => res.value ?? [])
}
