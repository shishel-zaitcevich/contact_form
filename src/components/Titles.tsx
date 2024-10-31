import { styled } from 'styled-components';

const useRem = (px: number): string => `${px / 16}rem`;

interface MainTitleProps {
  text: string;
}

const MainTitleContainer = styled.h1`
  font-size: ${useRem(48)};
  margin: 0;
  margin-bottom: ${useRem(40)};
  @media (max-width: 768px) {
    margin-bottom: ${useRem(20)};
    font-size: ${useRem(32)};
  }
`;

export function MainTitle({ text }: MainTitleProps) {
  return <MainTitleContainer>{text} </MainTitleContainer>;
}

const TitleContainer = styled.h3`
  margin: 0;
  font-size: ${useRem(24)};
  @media (max-width: 768px) {
    font-size: ${useRem(18)};
  }
`;

export function Title({ text }: MainTitleProps) {
  return <TitleContainer>{text} </TitleContainer>;
}
