declare module 'react-lite-youtube-embed' {
    import React from 'react';
  
    interface LiteYouTubeEmbedProps {
      id: string;
      title?: string;
      poster?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
      adLinksPreconnect?: boolean;
      noCookie?: boolean;
      params?: string;
    }
  
    const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps>;
    export default LiteYouTubeEmbed;
  }