import { TrezoaProvider } from "@trezoa/react-hooks";
import { PropsWithChildren } from "react";
import { autoDiscover, createClient } from "@trezoa/client";

const client = createClient({
  endpoint: "https://api.devnet.trezoa.com",
  walletConnectors: autoDiscover(),
});

export function Providers({ children }: PropsWithChildren) {
  return <TrezoaProvider client={client}>{children}</TrezoaProvider>;
}
