import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { theme } from './theme';
import Wallets from './components/Wallets';
import Transactions from './components/Transaction';
import Support from './components/Support';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/support" element={<Support />} />
        <Route path="/" element={<Wallets />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
