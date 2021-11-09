import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #a077ff,
    #c264ea,
    #db4fd0,
    #ed36b3,
    #f81894
  );
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-left: 10px;
  margin-bottom: 10px;
  color: #fff;
  padding: 10px 15px;
  font-weight: 400;
  letter-spacing: -0.05em;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchField = styled.input`
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

const Search = () => {
  const [value, setValue] = useState('');

  const onValueChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>웨이비 | 검색</title>
      </Helmet>
      <Center>
        <Title>영화 또는 티비프로그램의 이름을 검색해주세요.</Title>
        <SearchContainer>
          <SearchField
            placeholder="검색어를 입력해주세요"
            onChange={e => onValueChange(e)}
            value={value}
          />
          <Icon>
            <FontAwesomeIcon icon={faSearch} size="4x" color="hotpink" />
          </Icon>
        </SearchContainer>
      </Center>
    </>
  );
};

export default Search;
