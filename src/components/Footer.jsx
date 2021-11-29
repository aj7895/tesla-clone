import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <BottomBar>
      <ul>
        <li>
          <a href="#">Tesla &copy; 2021</a>
        </li>
        <li>
          <a href="#">Privacy & Legal</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Engage</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
      </ul>
    </BottomBar>
  );
};

export default Footer;

const BottomBar = styled.footer`
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 29px 0;
  }
  li {
    list-style: none;
    margin-left: 14px;
  }
  li a {
    text-decoration: none;
    font-size: 0.9rem;
  }
`;
