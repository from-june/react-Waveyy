import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LinkPoster from 'Components/LinkPoster';
import Loader from 'Components/Loader';
import ErrorMessage from 'Components/ErrorMessage';

const Title = styled.h2`
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 2.8rem;
  color: #fff;
  padding: 10px 15px;
  font-weight: 700;
`;

const Container = styled.ul`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const ItemList = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Movie = ({ popular, nowPlaying, upcoming, isLoading, error }) => {
  return (
    <>
      <Helmet>
        <title>웨이비 | 영화</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        popular && (
          <Container>
            <Title>인기 영화</Title>
            <ItemList>
              {popular.slice(0, 10).map((movie, index) => (
                <LinkPoster
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  imgUrl={movie.poster_path}
                  isMovie={true}
                  rank={index + 1}
                />
              ))}
            </ItemList>
          </Container>
        )
      )}
      {nowPlaying && (
        <Container>
          <Title>현재 상영중</Title>
          <ItemList>
            {nowPlaying.sort().map(movie => (
              <LinkPoster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imgUrl={movie.poster_path}
                isMovie={true}
              />
            ))}
          </ItemList>
        </Container>
      )}
      {upcoming && (
        <Container>
          <Title>상영 예정중</Title>
          <ItemList>
            {upcoming.map(movie => (
              <LinkPoster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imgUrl={movie.poster_path}
                isMovie={true}
              />
            ))}
          </ItemList>
        </Container>
      )}
      {error && <ErrorMessage text={error} />}
    </>
  );
};

export default Movie;
