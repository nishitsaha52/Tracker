import React from 'react';
import Link from 'next/link';
import { FaFire, FaDumbbell, FaUtensils, FaWalking } from 'react-icons/fa';
import styled from 'styled-components';

const BottomNavigation = () => {
  return (
    <NavContainer>
      <NavItem>
        <Link href="/" passHref>
          <NavLink>
            <FaFire />
            <span>Page1</span>
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/page2" passHref>
          <NavLink>
            <FaDumbbell />
            <span>Page2</span>
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/page3" passHref>
          <NavLink>
            <FaUtensils />
            <span>Page3</span>
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/page4" passHref>
          <NavLink>
            <FaWalking />
            <span>Page4</span>
          </NavLink>
        </Link>
      </NavItem>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  padding: 15px 0;
  border-top: 1px solid #333;
  border-radius: 10px 10px 0 0;
  margin-top: auto; /* Ensures navigation is at bottom */
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white; /* Set default color to white */
  font-size: 20px;

  span {
    font-size: 12px;
  }
`;

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

export default BottomNavigation;