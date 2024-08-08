import { getWalletBalance, getWalletTransactions } from './api/blockcypher';
import { updateWalletBalance, updateWalletTransactions } from './store/Wallets';
import { store } from './store';

type SyncItem = {
  address: string;
  type: 'balance' | 'transactions';
};

const syncQueue: SyncItem[] = [];
let isSyncing = false;

const processQueue = async () => {
  if (isSyncing) return;
  isSyncing = true;

  while (syncQueue.length > 0) {
    const item = syncQueue.shift();
    if (item) {
      try {
        if (item.type === 'balance') {
          const balanceData = await getWalletBalance(item.address);
          store.dispatch(updateWalletBalance({ address: item.address, balance: balanceData.balance / 1e8 }));
        } else if (item.type === 'transactions') {
          const transactionData = await getWalletTransactions(item.address);
          store.dispatch(updateWalletTransactions({ address: item.address, transactions: transactionData.txs }));
        }
      } catch (error) {
        console.error(`Failed to fetch ${item.type} for ${item.address}:`, error);
        // Retry logic: push the item back to the queue
        syncQueue.push(item);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  isSyncing = false;
};

export const addToQueue = (item: SyncItem) => {
  syncQueue.push(item);
  processQueue();
};
