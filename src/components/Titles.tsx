import { styled } from 'styled-components';

interface MainTitleProps {
  text: string;
}

const MainTitleContainer = styled.h1`
  margin: 0;
  margin-bottom: 40px;
`;

export function MainTitle({ text }: MainTitleProps) {
  return <MainTitleContainer>{text} </MainTitleContainer>;
}

const TitleContainer = styled.h3`
  margin: 0;
  font-size: 24px;
`;

export function Title({ text }: MainTitleProps) {
  return <TitleContainer>{text} </TitleContainer>;
}
