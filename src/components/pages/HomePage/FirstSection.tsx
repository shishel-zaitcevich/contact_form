import { styled } from 'styled-components';
import { MainTitle } from '../../Titles';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const useRem = (px: number): string => `${px / 16}rem`;

const FirstSectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${useRem(1280)};
  width: 100%;
  min-height: ${useRem(351)};
  height: 100%;
  font-size: ${useRem(32)};
  background-color: #f5f5f5;
  padding: ${useRem(40)};
  padding-bottom: ${useRem(80)};
  text-align: start;
  border-top: #c6c2c2 1px solid;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    font-size: ${useRem(18)};
    padding: ${useRem(10)};
  }
`;

const DescriptionBlock = styled.div`
  width: ${useRem(362)};
  display: flex;
  flex-direction: column;
  @media (max-width: 920px) {
    margin-bottom: ${useRem(40)};
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: ${useRem(40)};
  }
`;

const TextContainer = styled.p`
  font-size: ${useRem(16)};
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: ${useRem(16)};
  }
`;

const VideoContainer = styled.div`
  max-width: ${useRem(500)};
  width: 100%;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export function FirstSection() {
  return (
    <FirstSectionContainer>
      <DescriptionBlock>
        <MainTitle text="Most important title on the page"></MainTitle>
        <TextContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </TextContainer>
      </DescriptionBlock>
      <VideoContainer>
        <LiteYouTubeEmbed
          id="dQw4w9WgXcQ"
          title="YouTube video player"
          poster="maxresdefault"
        />
      </VideoContainer>
    </FirstSectionContainer>
  );
}
