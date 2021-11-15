import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { moviesAPI } from 'api';
import Loader from 'Components/Loader';
import ErrorMessage from 'Components/ErrorMessage';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  z-index: -2;
`;

const BackImage = styled.div`
  position: absolute;
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
    url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  opacity: 0.8;
  transition: all 0.2s linear;
  z-index: -1;
`;

const TextContent = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  letter-spacing: -0.1em;
  line-height: 1.5;
  z-index: 10;
`;

const Waveyy = styled.span`
  font-weight: 700;
  font-size: 4rem;
`;

const MovieLink = styled(Link)`
  padding: 7px 30px;
  font-size: 1.8rem;
  font-weight: 100;
  color: hsla(0, 0%, 98%, 0.9);
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;
  z-index: 10;
  transition: border 0.1s linear;

  &:hover {
    border: 1px solid hotpink;
  }
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popular, setPopular] = useState([]);

  const randomPic = Math.floor(Math.random() * popular.length);

  const getPopular = async () => {
    try {
      const {
        data: { results: popular }
      } = await moviesAPI.popular();
      setPopular(popular.slice(0, 4).map(movie => movie.backdrop_path));
    } catch (e) {
      setError("Can't find the information. Try again :)");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Helmet>
        <title>웨이비</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        popular && (
          <>
            <Container>
              <BackImage
                bgImg={`https://image.tmdb.org/t/p/original${popular[randomPic]}`}
              />
            </Container>
            <TextContent>
              <Waveyy>웨이비</Waveyy>에서 <br />
              최신 인기상영작을 만나보세요.
              <br />
              <MovieLink to="/movie">자세히 보기</MovieLink>
            </TextContent>
          </>
        )
      )}
      {error && <ErrorMessage text={error} />}
    </>
  );
};

export default Home;
