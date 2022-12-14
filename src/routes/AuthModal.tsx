import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {useForm, SubmitHandler} from "react-hook-form";
import {signIn, signUp} from "configs/firebase";
import {useNavigate} from "react-router-dom";
import {faApple, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ContentsText, SocialBtn} from "../styleds/authStyled";
import {ValidateResult} from "react-hook-form/dist/types/validator";

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

const AuthForm = styled.form`

`;

const AuthFormWrapper = styled.div`
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

interface IAuthValues {
    email: string;
    password: string;
    confirmPassword?: string;
}

interface IAuthModalProps {
    isSignUp: boolean
}

function AuthModal({isSignUp}: IAuthModalProps) {
    const [isClickedSignUp, setIsClickedSignUp] = useState(isSignUp);
    const {handleSubmit, register, resetField, watch} = useForm<IAuthValues>();
    const navigate = useNavigate();

    const signInHandle: SubmitHandler<IAuthValues> = async data => {
        const {email, password} = data;
        const success = await signIn(email, password);

        if (success) {
            //if signed in, redirect at home.
            navigate(-1);
        } else {
            resetField("password");
            setIsClickedSignUp(true);
        }
    };

    const signUpHandle: SubmitHandler<IAuthValues> = async data => {
        const {email, password, confirmPassword} = data;
        if (password !== confirmPassword) {
            return;
        }
        await signUp(email, password);
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
                <ContentsText fontSize={"26px"}>{isClickedSignUp ? "Create your account" : "???????????? ????????????"}</ContentsText>
                {
                    <AuthFormWrapper>
                        {
                            !isClickedSignUp &&
                            <>
                                <SocialBtn
                                    mgtop={"0px"}
                                    bg={"white"}
                                    fsize={"14px"}
                                    fweight={500}
                                    fcolor={"#3c4043"}>
                                    <FontAwesomeIcon color={"black"} fontSize={17} icon={faGoogle}/>
                                    <span>Google ???????????? ???????????????</span>
                                </SocialBtn>
                                <SocialBtn
                                    mgtop={"15px"}
                                    bg={"white"}
                                    fsize={"16px"}
                                    fweight={700}
                                    fcolor={"#3c4043"}
                                >
                                    <FontAwesomeIcon color={"black"} fontSize={21} icon={faApple}/>
                                    <span>Apple?????? ????????????</span>
                                </SocialBtn>
                            </>
                        }
                        <AuthForm onSubmit={handleSubmit(isClickedSignUp ? signUpHandle : signInHandle)}>
                            <input type={"email"} {...register("email", {required: true})} />
                            <input type={"password"} {...register("password", {required: true})}/>
                            {
                                isClickedSignUp &&
                                <input
                                    type={"password"}
                                    {
                                        ...register("confirmPassword", {
                                            required: true,
                                            // Validate<TFieldValue> = (value: TFieldValue) => ValidateResult | Promise<ValidateResult>;
                                        })
                                    }
                                />
                            }
                            <input type={"submit"} value={isClickedSignUp ? "Sign Up" : "Sign In"}/>
                        </AuthForm>
                    </AuthFormWrapper>
                }
            </AuthWrapper>
        </ModalBackground>

    );
}

export default AuthModal;