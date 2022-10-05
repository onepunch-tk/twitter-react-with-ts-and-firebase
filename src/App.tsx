import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGoogle, faApple} from "@fortawesome/free-brands-svg-icons";

type SignInBtn = {
    bg: string;
    fontSize: string;
    fontColor: string;
    fontWeight: number;
    marginTop: string;
    borderColor?: string;
}

const LoginMain = styled.main`
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

const MainImg = styled.div`
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

const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SignInWrapper = styled(ColBox)`
  padding: 40px;
`;

const ContentsText = styled.span<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
  color: #E6E9EA;
  letter-spacing: -1.2px;
  font-weight: 700;
  margin-top: 60px;
`;

const SocialWrapper = styled(ColBox)`
  width: 100%;
  margin-top: 40px;
`;

const SocialBtn = styled.a<SignInBtn>`
  background-color: ${props => props.bg};
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-top: ${props => props.marginTop};

  cursor: pointer;
  width: 300px;
  height: 40px;
  padding: 12px 25px;
  opacity: 1;
  border: ${props => props.borderColor ?? "inherit"};
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

const SignInInfoText = styled.span`
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

const TwitterWrapper = styled(ColBox)`
  margin-top: 35px;

  span {
    letter-spacing: 0;
  }
`;

const Footer = styled.footer`
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

const navList = [
    "소개",
    "고객센터",
    "이용약관",
    "개인정보 처리방침",
    "쿠키 정책",
    "접근성",
    "광고 정보",
    "블로그",
    "상태",
    "채용",
    "브랜드 리소스",
    "광고",
    "마케팅",
    "비즈니스용 트위터",
    "개발자",
    "디렉터리",
    "설정",
    "© 2022 Twitter, Inc.",
];

function App() {
    return (
        <LoginMain>
            <MainImg>
                <FontAwesomeIcon color={"white"} fontSize={340} icon={faTwitter}/>
            </MainImg>
            <SignInWrapper>
                <FontAwesomeIcon color={"white"} fontSize={40} icon={faTwitter}/>
                <ContentsText fontSize={"68px"}>지금 일어나고 있는 일</ContentsText>
                <ContentsText fontSize={"34px"}>오늘 트위터에 가입하세요.</ContentsText>
                <SocialWrapper>
                    <SocialBtn href={"#"} marginTop={"0px"} bg={"white"} fontSize={"14px"} fontWeight={500}
                               fontColor={"#3c4043"}>
                        <FontAwesomeIcon color={"black"} fontSize={17} icon={faGoogle}/>
                        <span>Google 계정으로 가입하기</span>
                    </SocialBtn>
                    <SocialBtn href={"#"} marginTop={"15px"} bg={"white"} fontSize={"16px"} fontWeight={700}
                               fontColor={"#3c4043"}>
                        <FontAwesomeIcon color={"black"} fontSize={21} icon={faApple}/>
                        <span>Apple에서 가입하기</span>
                    </SocialBtn>
                    <SocialBtn bg={"rgb(29, 155, 240)"} fontColor={"white"} fontSize={"16px"} marginTop={"15px"}
                               fontWeight={700}>
                        <span>휴대폰 번호나 이메일 주소로 가입하기</span>
                    </SocialBtn>
                    <SignInInfoText>
                        가입하시려면
                        <a href={"#"}>쿠키 사용</a>
                        을 포함해
                        <a href={"#"}>이용약관</a>
                        과
                        <a>개인정보 처리방침</a>
                        에 동의해야 합니다.
                    </SignInInfoText>
                </SocialWrapper>
                <TwitterWrapper>
                    <ContentsText fontSize={"17px"}>이미 트위터에 가입하셨나요?</ContentsText>
                    <SocialBtn
                        bg={"black"}
                        fontColor={"rgb(29, 155, 240)"}
                        fontSize={"16px"}
                        marginTop={"20px"}
                        fontWeight={700}
                        borderColor={`1px solid rgba(255,255,255,0.4)`}
                    >로그인
                    </SocialBtn>
                </TwitterWrapper>
            </SignInWrapper>
            <Footer>
                <ul>
                    {navList.map((nav,i) => <li key={i}>{nav}</li>)}
                </ul>
            </Footer>
        </LoginMain>
    );
}

export default App;
