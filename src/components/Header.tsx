import { styled } from 'styled-components';
import { ContactButton } from './Button';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: start;
`;

export function Header() {
  return (
    <HeaderContainer>
      <h3> Some Company</h3>
      <ContactButton />
    </HeaderContainer>
  );
}
