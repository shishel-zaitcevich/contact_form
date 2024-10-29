import { styled } from 'styled-components';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

const PageContainer = styled.div`
  display: flex;
  width: 1280px;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export function ContactFormPage() {
  return (
    <PageContainer>
      <Header />
      <Footer />
    </PageContainer>
  );
}
