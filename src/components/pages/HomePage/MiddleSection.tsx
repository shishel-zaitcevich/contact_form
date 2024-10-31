import { styled } from 'styled-components';
import { ContentList } from './MiddleBlock';
import { data } from '../../data';
import { MainTitle } from '../../Titles';
import { ContactButton } from '../../Button';

const useRem = (px: number): string => `${px / 16}rem`;

const MiddleSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: ${useRem(32)};
  margin-top: ${useRem(40)};
  margin-bottom: ${useRem(40)};
  text-align: start;
  @media (max-width: 600px) {
    padding: ${useRem(10)};
    margin-top: ${useRem(0)};
    margin-bottom: ${useRem(20)};
  }
`;

export function MiddleSection() {
  return (
    <MiddleSectionContainer>
      <ContentList items={data} />
      <ContactButton />
    </MiddleSectionContainer>
  );
}
