import React from 'react';
import styled from 'styled-components';

const CopyRight = styled.div`
  text-align: center;
  width: 100%;
  padding: 200px 10px 20px 10px;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
`;

const Footer = () => <CopyRight>© 2021 yell all rights reserved.</CopyRight>;

export default Footer;
