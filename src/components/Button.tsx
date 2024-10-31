import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

const useRem = (px: number): string => `${px / 16}rem`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  && {
    width: ${useRem(177)};
    height: ${useRem(31)};
    font-size: ${useRem(16)};
    background-color: black;
    border-radius: 10px;
    text-transform: none;
    color: white;

    &:hover {
      background-color: #333;
    }
    @media (max-width: 600px) {
      width: ${useRem(130)};
      font-size: ${useRem(14)};
    }
  }
`;

export function ContactButton() {
  return (
    <StyledLink to="/contact">
      <StyledButton>Contact us</StyledButton>
    </StyledLink>
  );
}
