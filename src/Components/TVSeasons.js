import React from 'react';
import styled from 'styled-components';

const TVSeasonContainer = styled.div`
  padding: 30px 50px;
`;
const Title = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 2.6rem;
  font-weight: 500;
  color: white;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 5;
  text-shadow: 1px 1px 2px hotpink;
`;

const SeasonNumber = styled.h3`
  font-size: 1.4rem;
  color: #e5e5e5;
  padding: 5px 10px;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
`;
const PosterContainer = styled.div`
  width: 180px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const PosterImg = styled.div`
  height: 250px;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const TVSeasons = ({ seasons }) => (
  <TVSeasonContainer>
    <Title>티비프로그램 시리즈</Title>
    <ContentContainer>
      {seasons &&
        seasons.length > 0 &&
        seasons.map(tv => (
          <PosterContainer key={tv.id}>
            <PosterImg
              bgImg={`https://image.tmdb.org/t/p/w400${tv.poster_path}`}
            />
            <SeasonNumber>{tv.name}</SeasonNumber>
          </PosterContainer>
        ))}
    </ContentContainer>
  </TVSeasonContainer>
);

export default TVSeasons;
