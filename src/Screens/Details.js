import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { moviesAPI, tvsAPI } from 'api';
import Detail from 'Components/Detail';

const Details = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState([]);

  const getDetail = async () => {
    let result = null;

    try {
      const isMovie = pathname.includes('/movie');
      const detailId = parseInt(id);
      if (isNaN(detailId)) return navigate('/');

      if (isMovie) {
        ({ data: result } = await moviesAPI.detail(detailId));
      } else {
        ({ data: result } = await tvsAPI.detail(detailId));
      }
    } catch (e) {
      setError("Can't find the information. Try again :)");
      console.error(e);
    } finally {
      setIsLoading(false);
      setResult(result);
    }
  };

  useEffect(() => {
    getDetail();
  });

  return <Detail result={result} isLoading={isLoading} error={error} />;
};

export default Details;
