import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { tvsAPI } from 'api';
import TV from 'Components/TV';
import Footer from 'Components/Footer';

const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
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

const TVshows = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  const getTVshows = async () => {
    try {
      const {
        data: { results: popular }
      } = await tvsAPI.popular();
      const {
        data: { results: topRated }
      } = await tvsAPI.topRated();
      const {
        data: { results: airingToday }
      } = await tvsAPI.airingToday();

      setPopular(popular);
      setTopRated(topRated);
      setAiringToday(airingToday);
    } catch (e) {
      setError("Can't find the information. Try again :)");
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTVshows();
  }, []);

  return (
    <Container>
      <TV
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        error={error}
        isLoading={isLoading}
      />
      <Footer />
    </Container>
  );
};

export default TVshows;
