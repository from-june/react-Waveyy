import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LinkPoster from 'Components/LinkPoster';
import Loader from 'Components/Loader';
import ErrorMessage from 'Components/ErrorMessage';

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  margin-top: 70px;
  color: #fff;
  padding: 10px 15px;
  font-weight: 400;
  letter-spacing: -0.05em;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px; ;
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchField = styled.input`
  margin-left: 10px;
  font-size: 1.6rem;
  padding: 15px 200px 15px 25px;
  border-radius: 30px;
  border: 1px solid #a077ff;
  caret-color: hotpink;
`;

const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 20px;
  cursor: pointer;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Category = styled.h3`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 5;
  text-shadow: 1px 1px 2px hotpink;
`;

const Search = ({
  isLoading,
  error,
  movieResults,
  tvResults,
  handleTerm,
  searchTerm,
  onSearchTermChange
}) => {
  return (
    <>
      <Helmet>
        <title>웨이비 | 검색</title>
      </Helmet>
      <Title>영화 또는 티비프로그램의 이름을 검색해주세요.</Title>
      <SearchContainer>
        <SearchForm onSubmit={handleTerm}>
          <SearchField
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            onChange={onSearchTermChange}
          />
          <Icon onClick={handleTerm}>
            <FontAwesomeIcon icon={faSearch} size="4x" color="hotpink" />
          </Icon>
        </SearchForm>
      </SearchContainer>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <>
              <Category>영화</Category>
              <ItemContainer>
                {movieResults.map(movie => (
                  <LinkPoster
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    imgUrl={movie.poster_path}
                    isMovie={true}
                  />
                ))}
              </ItemContainer>
            </>
          )}

          {tvResults && tvResults.length > 0 && (
            <>
              <Category>티비 프로그램</Category>
              <ItemContainer>
                {tvResults.map(tv => (
                  <LinkPoster
                    key={tv.id}
                    id={tv.id}
                    title={tv.name}
                    imgUrl={tv.poster_path}
                    isMovie={false}
                  />
                ))}
              </ItemContainer>
            </>
          )}
        </>
      )}

      {error && <ErrorMessage text={error} />}
    </>
  );
};

export default Search;
