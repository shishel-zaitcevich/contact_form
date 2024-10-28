import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  text-align: center;
  color: black;
  padding: 10px;
`;

export function Footer() {
  return (
    <FooterContainer>
      <h3>Some Company 2024</h3>
    </FooterContainer>
  );
}
