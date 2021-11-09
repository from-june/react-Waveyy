import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  z-index: 2;
`;

const VideoPlayer = ({ videoId }) => (
  <PlayerWrapper>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId.key}`}
      playing={false}
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: '70px', left: '0' }}
      controls={true}
    />
  </PlayerWrapper>
);

export default VideoPlayer;
