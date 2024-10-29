import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  && {
    width: 177px;
    height: 31px;
    font-size: 0.875rem;
    background-color: black;
    border-radius: 10px;
    text-transform: none;
    color: white;

    &:hover {
      background-color: #333;
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
