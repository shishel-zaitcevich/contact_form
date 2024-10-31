import { styled } from 'styled-components';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { ContactForm } from './ContactForm';

const PageContainer = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function ContactFormPage() {
  return (
    <PageContainer>
      <Header />
      <ContactForm />
      <Footer />
    </PageContainer>
  );
}
