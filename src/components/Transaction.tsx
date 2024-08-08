import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';

const Transactions: React.FC = () => {
  const wallets = useSelector((state: RootState) => state.wallets.wallets);

  return (
    <Container>
      <Title>Transactions</Title>
      {wallets.map((wallet) => (
        <div key={wallet.address}>
          <h3>{wallet.name} - {wallet.address}</h3>
          <TransactionList>
            {wallet.transactions.map((tx) => (
              <TransactionItem key={tx.hash}>
                <p>Transaction ID: {tx.hash}</p>
                <p>Confirmed: {tx.confirmations > 0 ? 'Yes' : 'No'}</p>
                <p>Inputs: {tx.inputs.length}</p>
                <p>Outputs: {tx.outputs.length}</p>
              </TransactionItem>
            ))}
          </TransactionList>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const TransactionList = styled.div`
  margin-top: 20px;
`;

const TransactionItem = styled.div`
  background: #2e2e2e;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

export default Transactions;
