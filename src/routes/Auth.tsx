import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGoogle, faApple} from "@fortawesome/free-brands-svg-icons";
import {
    ContentsText,
    Footer,
    LoginMain,
    MainImg,
    SignInInfoText,
    SignInWrapper,
    SocialBtn,
    SocialWrapper,
    TwitterWrapper
} from 'styleds/authStyled';
import {AUTH_MODAL} from "constans/routers";
import {Link, Outlet, useLocation} from "react-router-dom";

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

function Auth() {
    const location = useLocation();
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
                    <SocialBtn
                        as={Link}
                        state={{
                            background: {
                                location,
                                isSignUp: true
                            }
                        }}
                        to={`${AUTH_MODAL}`}
                        mgtop={"0px"}
                        bg={"white"}
                        fsize={"14px"}
                        fweight={500}
                        fcolor={"#3c4043"}>
                        <FontAwesomeIcon color={"black"} fontSize={17} icon={faGoogle}/>
                        <span>Google 계정으로 가입하기</span>
                    </SocialBtn>
                    <SocialBtn
                        as={Link}
                        state={{background: location}}
                        to={`${AUTH_MODAL}`}
                        mgtop={"15px"}
                        bg={"white"}
                        fsize={"16px"}
                        fweight={700}
                        fcolor={"#3c4043"}
                    >
                        <FontAwesomeIcon color={"black"} fontSize={21} icon={faApple}/>
                        <span>Apple에서 가입하기</span>
                    </SocialBtn>
                    <SocialBtn
                        as={Link}
                        state={{
                            background: {
                                location,
                                isSignUp: true
                            }
                        }}
                        to={`${AUTH_MODAL}`}
                        bg={"rgb(29, 155, 240)"}
                        fcolor={"white"}
                        fsize={"16px"}
                        fweight={700}
                        mgtop={"15px"}
                    >
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
                        as={Link}
                        state={{
                            background: {
                                location,
                                isSignUp: false
                            }
                        }}
                        to={`${AUTH_MODAL}`}
                        bg={"black"}
                        fcolor={"rgb(29, 155, 240)"}
                        fsize={"16px"}
                        fweight={700}
                        mgtop={"20px"}
                        bdcolor={`1px solid rgba(255,255,255,0.4)`}
                    >로그인
                    </SocialBtn>
                </TwitterWrapper>
            </SignInWrapper>
            <Footer>
                <ul>
                    {navList.map((nav, i) => <li key={i}>{nav}</li>)}
                </ul>
            </Footer>
            <Outlet/>
        </LoginMain>
    );
}

export default Auth;