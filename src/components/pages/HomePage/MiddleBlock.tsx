import { styled } from 'styled-components';
import { ContentBlockProps } from '../../data';
import { MainTitle, Title } from '../../Titles';

const useRem = (px: number): string => `${px / 16}rem`;

const BlockContainer = styled.div`
  max-width: ${useRem(264)};
  width: 100%;
  min-height: ${useRem(50)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: ${useRem(32)};
  gap: ${useRem(15)};
  // padding: ${useRem(40)};
  text-align: start;
  @media (max-width: 600px) {
    gap: ${useRem(10)};
    max-width: 100%;
  }
`;

const TextContainer = styled.p`
  font-size: ${useRem(16)};
  line-height: 1.5;
  color: #757575;
`;

interface ContentListProps {
  items: ContentBlockProps[];
}

const ContentListContainer = styled.div`
  max-width: ${useRem(1280)};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${useRem(40)};
  gap: ${useRem(40)};
  column-gap: ${useRem(60)};
  @media (max-width: 600px) {
    padding: ${useRem(10)};
    gap: ${useRem(15)};
  }
`;

export function ContentList({ items }: ContentListProps) {
  return (
    <ContentListContainer>
      <MainTitle text={'Also very important title'}></MainTitle>
      {items.map((item, index) => (
        <BlockContainer key={index}>
          <Title text={item.title} />
          <TextContainer>{item.text}</TextContainer>
        </BlockContainer>
      ))}
    </ContentListContainer>
  );
}
