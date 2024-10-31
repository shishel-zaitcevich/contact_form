import styled from 'styled-components';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { MainContent } from './MainContent';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  margin-right: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function HomePage() {
  return (
    <PageContainer>
      <Header />
      <MainContent />
      <Footer />
    </PageContainer>
  );
}
