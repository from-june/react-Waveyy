import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
`;

const Content = styled.p`
  margin-top: 10px;
  color: #888;
  font-size: 1.6rem;
  font-weight: 300;
`;

const Loader = () => {
  return (
    <Center>
      <Container>
        <FontAwesomeIcon icon={faCircleNotch} spin size="4x" color="#a077ff" />
        <Content>Loading</Content>
      </Container>
    </Center>
  );
};

export default Loader;
