import React, { useState } from 'react';
import styled from 'styled-components';
import { moviesAPI, tvsAPI } from 'api';
import Search from 'Components/Search';

const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #a077ff,
    #c264ea,
    #db4fd0,
    #ed36b3,
    #f81894
  );
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  min-height: 100vh;
`;

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTerm = e => {
    e.preventDefault();

    if (searchTerm !== '') {
      getResults();
    }
  };

  const onSearchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  const getResults = async () => {
    setIsLoading(true);

    try {
      const {
        data: { results: movieResults }
      } = await moviesAPI.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvsAPI.search(searchTerm);
      console.log();
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch (error) {
      setError("Can't find the information. Try again :)");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Search
        isLoading={isLoading}
        error={error}
        movieResults={movieResults}
        tvResults={tvResults}
        handleTerm={handleTerm}
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
      />
    </Container>
  );
};

export default SearchResults;
