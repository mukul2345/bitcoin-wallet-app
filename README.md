
# Bitcoin Wallet App 
# Owner: [Mukul Gupta]

# Approach to Solve the Assignment
To solve the assignment, I implemented a React-based application that uses Redux for state management and integrates with the BlockCypher API to fetch Bitcoin testnet wallet balances and transactions. The application allows users to import wallets using a BIP39 mnemonic and manage their wallets' data dynamically. A queue-based synchronization approach is employed to handle asynchronous data fetching with retries and delays, ensuring robust and reliable updates of wallet information.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mukul2345/bitcoin-wallet-app.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your BlockCypher API key:
   ```
   REACT_APP_BLOCKCYPHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```
bitcoin-wallet-app/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── api/
│   │   └── blockcypher.ts
│   ├── components/
│   │   ├── ImportWalletModal.tsx
│   │   └── Wallets.tsx
│   ├── store/
│   │   └── wallets.ts
│   ├── syncQueue.ts
│   ├── theme.ts
│   ├── globalStyles.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── store.ts
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── .env
```

## Available Scripts

In the project directory, you can run:

### `npm start`

```
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Architecture

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **Redux**: State management library.
- **styled-components**: CSS-in-JS library for styling.
- **BlockCypher API**: External API for blockchain data.

### Component Structure

- **App.tsx**: Root component that sets up the theme and global styles.
- **Wallets.tsx**: Main component for displaying wallets and handling wallet import.
- **ImportWalletModal.tsx**: Modal component for importing wallets.

### State Management

- **wallets.ts**: Redux slice for managing wallets, balances, and transactions.
- **store.ts**: Redux store configuration.

### Sync Queue

- **syncQueue.ts**: Manages the synchronization of wallet data.

## Testing

### Manual Testing Steps

1. **Import Wallet**:
   - Click the "Import Wallet" button.
   - Enter a wallet name and BIP39 mnemonic.
   - Click "Submit" and check if the wallet is added to the list.

2. **View Balances**:
   - Ensure the balance is fetched and displayed for each wallet.

3. **View Transactions**:
   - Check if the transaction history is fetched and displayed correctly.

## API Integration

The application uses the BlockCypher API to fetch wallet balances and transaction histories. The API key is stored in the `.env` file.

- **getWalletBalance**: Fetches the balance of a Bitcoin testnet wallet.
- **getWalletTransactions**: Fetches the transaction history of a Bitcoin testnet wallet.
