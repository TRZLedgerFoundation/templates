import { createTrezoaClient, KeyPairSigner, TrezoaClient } from 'gill'
import { loadKeypairSignerFromFile } from 'gill/node'
import { ApiConfig, getApiConfig } from './get-api-config.js'
import { ApiLogger, log } from './api-logger.js'

export interface ApiContext {
  client: TrezoaClient
  log: ApiLogger
  signer: KeyPairSigner
}

let context: ApiContext | undefined

export async function getApiContext(): Promise<ApiContext> {
  if (context) {
    return context
  }

  const config: ApiConfig = getApiConfig()
  const client = createTrezoaClient({ urlOrMoniker: config.trezoaRpcEndpoint })
  const signer = await loadKeypairSignerFromFile(config.trezoaSignerPath)

  context = { client, log, signer }

  return context
}
