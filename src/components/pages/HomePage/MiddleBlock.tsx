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
  text-align: start;
  @media (max-width: 768px) {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ContentListBlock = styled.div`
  max-width: ${useRem(1280)};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${useRem(40)};
  gap: ${useRem(40)};
  column-gap: ${useRem(60)};
  @media (max-width: 768px) {
    padding: ${useRem(0)};
    gap: ${useRem(15)};
  }
`;

export function ContentList({ items }: ContentListProps) {
  return (
    <ContentListContainer>
      <MainTitle text={'Also very important title'}></MainTitle>
      <ContentListBlock>
        {items.map((item, index) => (
          <BlockContainer key={index}>
            <Title text={item.title} />
            <TextContainer>{item.text}</TextContainer>
          </BlockContainer>
        ))}
      </ContentListBlock>
    </ContentListContainer>
  );
}
