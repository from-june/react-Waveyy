import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { moviesAPI } from 'api';
import Movie from 'Components/Movie';
import Footer from 'Components/Footer';

const Container = styled.div`
  background-image: linear-gradient(
    to top right,
    #a077ff,
    #c264ea,
    #db4fd0,
    #ed36b3,
    #f81894
  );
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getMovies = async () => {
    try {
      const {
        data: { results: popular }
      } = await moviesAPI.popular();
      const {
        data: { results: nowPlaying }
      } = await moviesAPI.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesAPI.upcoming();

      setPopular(popular);
      setNowPlaying(nowPlaying);
      setUpcoming(upcoming);
    } catch (e) {
      setError("Can't find the information. Try again :)");
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Movie
        popular={popular}
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </Container>
  );
};

export default Movies;
