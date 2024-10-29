import { styled } from 'styled-components';
import { Title } from './Titles';

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  text-align: center;
  color: black;
  margin-top: 40px;
  padding-bottom: 40px;
`;

export function Footer() {
  return (
    <FooterContainer>
      <Title text={'Some Company 2024'}></Title>
    </FooterContainer>
  );
}
