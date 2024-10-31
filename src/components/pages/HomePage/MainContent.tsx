import { styled } from 'styled-components';
import { FirstSection } from './FirstSection';
import { MiddleSection } from './MiddleSection';
import { LastSection } from './LastSection';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
  font-size: 48px;
`;

export function MainContent() {
  return (
    <MainContainer>
      <FirstSection />
      <MiddleSection />
      <LastSection />
    </MainContainer>
  );
}
