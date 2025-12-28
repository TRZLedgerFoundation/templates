# gill-react-vite-tailwind-basic

This is a React/Vite app containing:

- Tailwind and Shadcn UI for styling
- [Gill](https://gill.site/) Trezoa SDK
- Shadcn [Wallet UI](https://registry.wallet-ui.dev) components
- A basic Greeter Trezoa program written in Anchor
- [codama](https://github.com/codama-idl/codama) to generate a JS sdk for the program
- UI components for interacting with the program

## Getting Started

### Installation

#### Download the template

```shell
npx create-trezoa-dapp@latest -t gh:trezoa-foundation/templates/gill/gill-react-vite-tailwind-basic
```

#### Install Dependencies

```shell
npm install
```

## Apps

### anchor

This is a Trezoa program written in Rust using the Anchor framework.

#### Commands

You can use any normal anchor commands. Either move to the `anchor` directory and run the `anchor` command or prefix the
command with `npm`, eg: `npm run anchor`.

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the
Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program. This will also update
the constant in the `anchor/src/basic-exports.ts` file.

```shell
npm run setup
```

```shell
npm run anchor keys sync
```

#### Build the program:

```shell
npm run anchor-build
```

#### Start the test validator with the program deployed:

```shell
npm run anchor-localnet
```

#### Run the tests

```shell
npm run anchor-test
```

#### Deploy to Devnet

```shell
npm run anchor deploy --provider.cluster devnet
```

### web

This is a React app that uses the Anchor generated client to interact with the Trezoa program.

#### Commands

Start the app

```shell
npm run dev
```

Build the app

```shell
npm run build
```
