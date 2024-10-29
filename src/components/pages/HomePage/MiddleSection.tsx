import { styled } from 'styled-components';
import { ContentList } from './MiddleBlock';
import { data } from '../../data';
import { MainTitle } from '../../Titles';
import { ContactButton } from '../../Button';

const MiddleSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;
  padding: 40px;
  text-align: start;
`;

export function MiddleSection() {
  return (
    <MiddleSectionContainer>
      <MainTitle text={'Also very important title'}></MainTitle>
      <ContentList items={data} />
      <ContactButton />
    </MiddleSectionContainer>
  );
}
