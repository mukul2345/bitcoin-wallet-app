import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Wallet {
  name: string;
  address: string;
  balance: number;
  transactions: any[];
}

interface WalletsState {
  wallets: Wallet[];
}

const initialState: WalletsState = {
  wallets: [],
};

const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallets.push(action.payload);
    },
    updateWalletBalance: (state, action: PayloadAction<{ address: string; balance: number }>) => {
      const wallet = state.wallets.find((w) => w.address === action.payload.address);
      if (wallet) {
        wallet.balance = action.payload.balance;
      }
    },
    updateWalletTransactions: (state, action: PayloadAction<{ address: string; transactions: any[] }>) => {
      const wallet = state.wallets.find((w) => w.address === action.payload.address);
      if (wallet) {
        wallet.transactions = action.payload.transactions;
      }
    },
  },
});

export const { addWallet, updateWalletBalance, updateWalletTransactions } = walletsSlice.actions;

export default walletsSlice.reducer;
