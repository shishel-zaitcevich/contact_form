import { styled } from 'styled-components';
import { ContentBlockProps } from '../../data';
import { Title } from '../../Titles';

const BlockContainer = styled.div`
  max-width: 264px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 32px;
  gap: 15px;
  // padding: 40px;
  text-align: start;
`;

const TextContainer = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #757575;
`;

interface ContentListProps {
  items: ContentBlockProps[];
}

const ContentListContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px;
  gap: 40px;
  column-gap: 60px;
`;

export function ContentList({ items }: ContentListProps) {
  return (
    <ContentListContainer>
      {items.map((item, index) => (
        <BlockContainer key={index}>
          <Title text={item.title} />
          <TextContainer>{item.text}</TextContainer>
        </BlockContainer>
      ))}
    </ContentListContainer>
  );
}
