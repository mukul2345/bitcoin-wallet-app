import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImportWalletModal from './ImportWalletModal';
import { RootState } from '../store';
import { addToQueue } from '../syncQueue';

const Wallets = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const wallets = useSelector((state: RootState) => state.wallets.wallets);

  useEffect(() => {
    wallets.forEach(wallet => {
      addToQueue({ address: wallet.address, type: 'balance' });
      addToQueue({ address: wallet.address, type: 'transactions' });
    });
  }, [wallets]);

  return (
    <Container>
      <Header>
        <Title>Wallets</Title>
        <Button onClick={() => setModalOpen(true)}>Import Wallet</Button>
      </Header>
      <WalletList>
        {wallets.map((wallet) => (
          <WalletItem key={wallet.address}>
            <p>{wallet.name}</p>
            <p>{wallet.address}</p>
            <p>{wallet.balance} BTC</p>
          </WalletItem>
        ))}
      </WalletList>
      {isModalOpen && <ImportWalletModal onClose={() => setModalOpen(false)} />}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
`;

const WalletList = styled.div`
  margin-top: 20px;
`;

const WalletItem = styled.div`
  background: #2e2e2e;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

export default Wallets;
