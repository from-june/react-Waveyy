import React from 'react';
import styled from 'styled-components';
import VideoPlayer from 'Components/VideoPlayer';
import TVSeasons from 'Components/TVSeasons';
import Loader from 'Components/Loader';
import ErrorMessage from 'Components/ErrorMessage';
import IMDB from 'image/imdb.png';

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const BackdropImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to left,
      rgba(248, 24, 148, 0) 10%,
      rgba(248, 24, 148, 0.25) 25%,
      rgba(248, 24, 148, 0.5) 50%,
      rgba(248, 24, 148, 0.75) 75%,
      rgba(248, 24, 148, 1) 100%
    ),
    url(${props => props.bgImgUrl});
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
`;

const VideoContainer = styled.div`
  padding: 50px;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px;
  z-index: 5;
  border-bottom: 2px hidden hotpink;
`;

const PosterContainer = styled.div`
  margin-top: 70px;
  margin-right: 30px;
`;

const PosterImg = styled.div`
  width: 315px;
  height: 500px;
  background-image: url(${props => props.bgImgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  margin-top: 70px;
  padding: 20px;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 3.2rem;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const IMDBImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Date = styled.p`
  margin-bottom: 20px;
`;

const Summary = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #c5c5c5;
`;

const Company = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 10px;
`;
const Country = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
`;
const OverView = styled.div`
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.8;
  letter-spacing: -0.05em;
`;

const Detail = ({ result, isLoading, error }) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      result && (
        <Container>
          {result.videos && result.videos.results.length > 0 && (
            <VideoContainer>
              <VideoPlayer videoId={result.videos.results?.[0]} />
            </VideoContainer>
          )}
          <BackdropImg
            bgImgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <ContentContainer>
            <PosterContainer>
              <PosterImg
                bgImgUrl={`https://image.tmdb.org/t/p/w400${result.poster_path}`}
              />
            </PosterContainer>
            <TextContainer>
              <TitleContainer>
                <Title>{result.title ? result.title : result.name} </Title>
                {result?.imdb_id && (
                  <a
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IMDBImg src={IMDB} alt="imdb" />
                  </a>
                )}
              </TitleContainer>
              <Date>
                {result.release_date
                  ? result.release_date
                  : result.first_air_date}
              </Date>
              <Summary>
                {result.genres?.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
                <span>
                  |{' '}
                  {result.runtime
                    ? result.runtime
                    : result.episode_run_time?.[0]}
                  분
                </span>
              </Summary>
              <Company>
                제작사:{' '}
                {result.production_companies?.map(company => (
                  <span key={company.id}>{company.name}, </span>
                ))}
              </Company>
              <Country>
                제작국가:{' '}
                {result.production_countries?.map(country => (
                  <span key={country.iso_3166_1}>{country.name}, </span>
                ))}
              </Country>
              <OverView>{result.overview}</OverView>
            </TextContainer>
          </ContentContainer>
          {result.seasons && <TVSeasons seasons={result.seasons} />}
        </Container>
      )
    )}
    {error && <ErrorMessage text={error} />}
  </>
);

export default Detail;
