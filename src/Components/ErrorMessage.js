import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;

const Message = styled.p`
  color: hotpink;
  font-size: 1.6rem;
  font-weight: 300;
`;

const ErrorMessage = text => (
  <Center>
    <ErrorContainer>
      <Message>{text}</Message>
    </ErrorContainer>
  </Center>
);

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorMessage;
