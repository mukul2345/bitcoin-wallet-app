import React from 'react';
import styled from 'styled-components';

const Support: React.FC = () => {
  return (
    <Container>
      <Title>Support</Title>
      <p>If you need help, please contact Mukul Gupta.</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

export default Support;
