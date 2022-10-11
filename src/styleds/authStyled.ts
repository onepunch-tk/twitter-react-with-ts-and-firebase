import styled from "styled-components";
import {Link} from "react-router-dom";

type SignInBtn = {
    bg: string;
    fsize: string;
    fcolor: string;
    fweight: number;
    mgtop: string;
    bdcolor?: string;
}

export const LoginMain = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 1.2fr) minmax(30%, 1fr);
  grid-template-rows: minmax(min-content, 100vh) 6vh;
  background-color: black;

  @media screen and (max-width: 390px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.4fr 120px;
  }
`;

export const MainImg = styled.div`
  background-image: url("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 390px) {
    grid-row: 2;
  }
`;

export const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SignInWrapper = styled(ColBox)`
  padding: 40px;
`;

export const ContentsText = styled.span<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
  color: #E6E9EA;
  letter-spacing: -1.2px;
  font-weight: 700;
  margin-top: 60px;
`;

export const SocialWrapper = styled(ColBox)`
  width: 100%;
  margin-top: 40px;
`;

export const SocialBtn = styled.button<SignInBtn>`
  background-color: ${props => props.bg};
  color: ${props => props.fcolor};
  font-size: ${props => props.fsize};
  font-weight: ${props => props.fweight};
  margin-top: ${props => props.mgtop};

  cursor: pointer;
  width: 300px;
  height: 40px;
  padding: 12px 25px;
  opacity: 1;
  border: ${props => props.bdcolor ?? "inherit"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  span {
    margin-left: 10px;
  }
`;

export const SignInInfoText = styled.span`
  margin-top: 10px;
  color: rgb(113, 118, 123);
  font-size: 11px;
  width: 300px;

  a {
    cursor: pointer;
    margin-left: 2.5px;
    color: rgb(29, 155, 240);
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const TwitterWrapper = styled(ColBox)`
  margin-top: 35px;

  span {
    letter-spacing: 0;
  }
`;

export const Footer = styled.footer`
  grid-column: span 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
    color: rgb(113, 118, 123);
    flex-wrap: wrap;

    li {
      cursor: pointer;
    }

    li:not(last-child) {
      margin-right: 15px;
    }

    li:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 390px) {
    grid-row: 3;

    ul {
      width: 90%;

      li:not(last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;



