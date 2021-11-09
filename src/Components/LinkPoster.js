import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PosterTitle = styled.h2`
  color: #f5f5f5;
  margin-left: 5px;
  font-size: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 20px;
`;

const Item = styled.div`
  position: relative;
  width: 220px;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s linear;

  &:hover {
    transform: translateY(-8px);
    transition: transform 0.2s linear;
  }
`;

const Rank = styled.h2`
  position: absolute;
  top: -15px;
  left: -15px;
  font-size: 5rem;
  font-weight: 700;
  font-style: italic;
  color: #fff;
  text-shadow: 1px 1px 2px hotpink;
`;

const Container = styled.div`
  margin-bottom: 5px;
`;

const PosterImg = styled.div`
  height: 340px;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const LinkPoster = ({ id, title, imgUrl, isMovie = false, rank }) => (
  <Item>
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        <PosterImg bgImg={`https://image.tmdb.org/t/p/w400${imgUrl}`} />
      </Container>
      {rank ? <Rank>{rank}</Rank> : null}
      <PosterTitle>{title}</PosterTitle>
    </Link>
  </Item>
);

export default LinkPoster;
