import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LinkPoster from 'Components/LinkPoster';
import Loader from 'Components/Loader';
import ErrorMessage from 'Components/ErrorMessage';

const Title = styled.h2`
  font-size: 2.8rem;
  margin-left: 10px;
  margin-bottom: 10px;
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

const TV = ({ popular, airingToday, topRated, isLoading, error }) => {
  return (
    <>
      <Helmet>
        <title>웨이비 | 티비프로그램</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        popular && (
          <Container>
            <Title>인기 프로그램</Title>
            <ItemList>
              {popular.slice(0, 10).map((tv, index) => (
                <LinkPoster
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  imgUrl={tv.poster_path}
                  isMovie={false}
                  rank={index + 1}
                />
              ))}
            </ItemList>
          </Container>
        )
      )}
      {airingToday && (
        <Container>
          <Title>현재 방영중</Title>
          <ItemList>
            {airingToday.map(tv => (
              <LinkPoster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                imgUrl={tv.poster_path}
                isMovie={false}
              />
            ))}
          </ItemList>
        </Container>
      )}
      {topRated && (
        <Container>
          <Title>평점 높은 프로그램</Title>
          <ItemList>
            {topRated.map(tv => (
              <LinkPoster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                imgUrl={tv.poster_path}
                isMovie={false}
              />
            ))}
          </ItemList>
        </Container>
      )}
      {error && <ErrorMessage text={error} />}
    </>
  );
};

export default TV;
