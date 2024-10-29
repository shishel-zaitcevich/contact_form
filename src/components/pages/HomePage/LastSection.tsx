import { MainTitle } from '../../Titles';
import { ContactButton } from '../../Button';
import { styled } from 'styled-components';

const LastSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  min-height: 150px;
  font-size: 32px;
  background-color: #f5f5f5;
  padding: 40px;
  text-align: start;
  border-bottom: #c6c2c2 1px solid;
`;

export function LastSection() {
  return (
    <LastSectionContainer>
      <MainTitle text={'Less important title'}></MainTitle>
      <ContactButton />
    </LastSectionContainer>
  );
}
