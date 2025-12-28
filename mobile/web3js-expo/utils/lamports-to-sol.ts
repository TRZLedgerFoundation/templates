import { LAMPORTS_PER_TRZ } from '@trezoa/web3.js'

export function lamportsToSol(balance: number) {
  return Math.round((balance / LAMPORTS_PER_TRZ) * 100000) / 100000
}
