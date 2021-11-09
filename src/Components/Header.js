import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  padding: 20px;
  z-index: 20;
`;

const NavList = styled.ul`
  margin-left: 30px;
  display: flex;
`;

const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: #a077ff;
`;

const Waveyy = styled.span`
  background: linear-gradient(
    to right bottom,
    #a077ff,
    #c264ea,
    #db4fd0,
    #ed36b3,
    #f81894
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavItem = styled.li`
  font-size: 2rem;
  color: ${props => (props.selected ? 'rgba(248, 24, 148, 1) ' : 'black')};

  :not(:last-child) {
    margin-right: 10px;
  }
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  font-size: 1.5rem;

  &:hover {
    color: rgba(248, 24, 148, 1);
  }
`;

const Navigation = () => {
  let { pathname } = useLocation();

  return (
    <Container>
      <Link to="/">
        <Title>
          <Waveyy>Waveyy</Waveyy>
        </Title>
      </Link>
      <NavList>
        <NavItem selected={pathname === '/'}>
          <NavLink to="/">홈</NavLink>
        </NavItem>
        <NavItem selected={pathname.includes('/movie')}>
          <NavLink to="/movie">영화</NavLink>
        </NavItem>
        <NavItem selected={pathname.includes('/show')}>
          <NavLink to="/show">티비프로그램</NavLink>
        </NavItem>
        <NavItem selected={pathname.includes('/search')}>
          <NavLink to="/search">검색</NavLink>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navigation;
