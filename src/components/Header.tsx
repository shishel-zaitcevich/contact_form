import { styled } from 'styled-components';
import { ContactButton } from './Button';
import { Title } from './Titles';

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: start;
  padding-bottom: 40px;
  z-index: 100;
`;

export function Header() {
  return (
    <HeaderContainer>
      <Title text={'Some Company'}></Title>
      <ContactButton />
    </HeaderContainer>
  );
}
