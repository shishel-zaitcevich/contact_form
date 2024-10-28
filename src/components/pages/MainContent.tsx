import { styled } from 'styled-components';
import { FirstBlock } from './FirstBlock';

const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  font-size: 48px;
  beckground-color: light-grey;
`;

export function MainContent() {
  return (
    <MainContainer>
      <FirstBlock />
    </MainContainer>
  );
}
