import styled from 'styled-components';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { MainContent } from './MainContent';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  margin-right: 0;
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
