import { MainTitle } from '../../Titles';
import { ContactButton } from '../../Button';
import { styled } from 'styled-components';

const LastSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  min-height: 150px;

  font-size: 32px;
  background-color: #ebe9e9;
  padding: 40px;
  text-align: start;
`;

export function LastSection() {
  return (
    <LastSectionContainer>
      <MainTitle text={'Less important title'}></MainTitle>
      <ContactButton />
    </LastSectionContainer>
  );
}
