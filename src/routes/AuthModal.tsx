import React, {useState} from 'react';
import styled from "styled-components";
import {useForm, SubmitHandler} from "react-hook-form";
import {signIn} from "configs/firebase";
import {useNavigate} from "react-router-dom";
import {faApple, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ContentsText, SocialBtn} from "../styleds/authStyled";

const ModalBackground = styled.div`
  width: 100vw;
  height: 106vh;
  position: absolute;
  top: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthWrapper = styled.div`
  width: 400px;
  height: 500px;
  background-color: black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AuthHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg:first-child {
    cursor: pointer;
  }
`;

const SignInForm = styled.form`

`;

const SignIn = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  
  span:first-child {
    align-self: start;
    margin: 30px 0;
  }
`;

const SignUp = styled.div`

`;

interface ISignInValues {
    email: string;
    password: string;
}

interface IAuthModalProps {
    isSignUp: boolean
}

function AuthModal({isSignUp}: IAuthModalProps) {
    const [isClickedSignUp, setIsClickedSignUp] = useState(isSignUp);
    const {handleSubmit, register} = useForm<ISignInValues>();
    const navigate = useNavigate();

    const signInHandle: SubmitHandler<ISignInValues> = async data => {
        const {email, password} = data;
        const success = await signIn(email, password);

        if (success) {
            //if signed in, redirect at home.
            navigate(-1);
        } else {
            setIsClickedSignUp(true);
        }
    };

    const closeHandle = () => {
        navigate(-1);
    };

    // const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    return (
        <ModalBackground>
            <AuthWrapper>
                <AuthHeader>
                    <FontAwesomeIcon color={"white"} fontSize={26} icon={faXmark} onClick={closeHandle}/>
                    <FontAwesomeIcon color={"white"} fontSize={30} icon={faTwitter}/>
                    <div></div>
                </AuthHeader>
                {
                    isClickedSignUp ?
                        <SignUp></SignUp> :
                        <SignIn>
                            <ContentsText fontSize={"26px"}>트위터에 로그인하기</ContentsText>
                            <SocialBtn
                                mgtop={"0px"}
                                bg={"white"}
                                fsize={"14px"}
                                fweight={500}
                                fcolor={"#3c4043"}>
                                <FontAwesomeIcon color={"black"} fontSize={17} icon={faGoogle}/>
                                <span>Google 계정으로 로그인하기</span>
                            </SocialBtn>
                            <SocialBtn
                                mgtop={"15px"}
                                bg={"white"}
                                fsize={"16px"}
                                fweight={700}
                                fcolor={"#3c4043"}
                            >
                                <FontAwesomeIcon color={"black"} fontSize={21} icon={faApple}/>
                                <span>Apple에서 로그하기</span>
                            </SocialBtn>
                            <SignInForm onSubmit={handleSubmit(signInHandle)}>
                                <input type={"email"} {...register("email", {required: true})} />
                                <input type={"password"} {...register("password", {required: true})}/>
                                <input type={"submit"} value={"Sign In"}/>
                            </SignInForm>
                        </SignIn>

                }

            </AuthWrapper>
        </ModalBackground>

    );
}

export default AuthModal;