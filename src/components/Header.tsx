import { styled } from 'styled-components';
import { ContactButton } from './Button';
import { Title } from './Titles';

const useRem = (px: number): string => `${px / 16}rem`;

const HeaderContainer = styled.header`
  max-width: ${useRem(1280)};
  width: 100vw;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: start;
  padding: ${useRem(40)};
  z-index: 100;
  @media (max-width: 600px) {
    padding: ${useRem(10)};
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Title text={'Some Company'}></Title>
      <ContactButton />
    </HeaderContainer>
  );
}
