import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addWallet } from '../store/Wallets';
import { addToQueue } from '../syncQueue';

interface ImportWalletModalProps {
  onClose: () => void;
}

const ImportWalletModal: React.FC<ImportWalletModalProps> = ({ onClose }) => {
  const [mnemonic, setMnemonic] = useState('');
  const [walletName, setWalletName] = useState('');
  const dispatch = useDispatch();

  const handleImport = () => {
    // Placeholder for converting mnemonic to address
    const address = 'generated-testnet-address';
    
    dispatch(addWallet({
      name: walletName,
      address,
      balance: 0,
      transactions: [],
    }));

    addToQueue({ address, type: 'balance' });
    addToQueue({ address, type: 'transactions' });

    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Import Wallet</h2>
        <label>
          Wallet Name:
          <Input type="text" value={walletName} onChange={(e) => setWalletName(e.target.value)} />
        </label>
        <label>
          Mnemonic:
          <Textarea value={mnemonic} onChange={(e) => setMnemonic(e.target.value)} />
        </label>
        <SubmitButton onClick={handleImport}>Submit</SubmitButton>
      </ModalContent>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  background: #2e2e2e;
  border: 1px solid #555;
  color: #fff;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  background: #2e2e2e;
  border: 1px solid #555;
  color: #fff;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
`;

export default ImportWalletModal;
