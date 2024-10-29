import { styled } from 'styled-components';
import { MainTitle } from '../../Titles';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const FirstSectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  min-height: 351px;
  height: 100%;
  font-size: 32px;
  background-color: #ebe9e9;
  padding: 40px;
  padding-bottom: 80px;
  text-align: start;
`;

const DescriptionBlock = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const VideoContainer = styled.div`
  max-width: 500px;
  width: 100%;
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
