import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">Wallets</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <NavLink to="/support">Support</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #333;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  &:hover {
    background: #444;
  }
`;

export default Navbar;
