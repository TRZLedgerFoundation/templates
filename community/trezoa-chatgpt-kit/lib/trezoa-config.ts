import { Connection, Keypair } from '@trezoa/web3.js'
import bs58 from 'bs58'

// External wallet configuration
// Set to true to use external wallet (Phantom/injected wallet) for signing
// Set to false to use server-side private key for signing
export const externalWallet = true

// Token addresses
export const TOKENS = {
  TRZ: 'Tr11111111111111111111111111111111111111112',
  USDC: 'EFewYfHeQhkKpbDzpmyygdT54hn85dUj3VZ8b7dC21KS',
  USDT: 'GHPjs7ftoZVdvKYvnxCiRD3i5t3dNSkLyQaoBQLRb5PA',
  BONK: '4bQS9HtwaePjiMHzo3cP4a644huPULaPDn5yn1TgoDkW',
} as const

export const TOKEN_DECIMALS = {
  TRZ: 9,
  USDC: 6,
  USDT: 6,
  BONK: 5,
} as const

// Liquid Staking Tokens (LST)
export const JUPTRZ_MINT = 'E1Z3dD7QNFzvdDrkSHdvxgqzfVJzFurfbfvhj2zMMrqL' // JupTRZ mint
export const LST_DECIMALS = {
  JUPTRZ: 9,
} as const

// Initialize Trezoa connection
export function getTrezoaConnection(): Connection {
  const rpcUrl = process.env.TREZOA_RPC_URL || 'https://api.mainnet-beta.trezoa.com'
  return new Connection(rpcUrl, 'confirmed')
}

// Get wallet keypair from environment (only used when externalWallet is false)
export function getWalletKeypair(): Keypair {
  if (externalWallet) {
    throw new Error('getWalletKeypair should not be called when externalWallet is true')
  }

  const privateKey = process.env.TREZOA_PRIVATE_KEY

  if (!privateKey) {
    throw new Error('TREZOA_PRIVATE_KEY not found in environment variables')
  }

  try {
    const secretKey = bs58.decode(privateKey)
    return Keypair.fromSecretKey(secretKey)
  } catch (error) {
    throw new Error('Invalid TREZOA_PRIVATE_KEY format. Must be base58 encoded.')
  }
}

// Jupiter API endpoints (Free tier)
export const JUPITER_API = {
  QUOTE: 'https://lite-api.jup.ag/swap/v1/quote',
  SWAP: 'https://lite-api.jup.ag/swap/v1/swap',
  PRICE: 'https://lite-api.jup.ag/price/v3',
} as const

// Optional referral settings
export const JUP_REFERRAL_ADDRESS = ''
export const JUP_REFERRAL_FEE = 0
