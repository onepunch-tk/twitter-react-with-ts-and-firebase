import React, {useState} from 'react';
import styled from "styled-components";
import {useForm, SubmitHandler} from "react-hook-form";
import {signIn} from "configs/firebase";
import {useNavigate} from "react-router-dom";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInForm = styled.form`

`;

const SignIn = styled.div`
  width: 350px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
`;

const SignUp = styled.div`
  width: 350px;
  height: 200px;
  background-color: black;
  border-radius: 5px;
`;

interface ISignInValues {
    email: string;
    password: string;
}

interface IAuthModalProps {
    isSignUp: boolean
}

function AuthModal({isSignUp}: IAuthModalProps) {
    const [isClickedSignUb, setIsClickedSignUp] = useState(isSignUp);
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

    // const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    return (
        <Div>
            {
                isClickedSignUb ?
                    <SignUp></SignUp> :
                    <SignIn>
                        <SignInForm onSubmit={handleSubmit(signInHandle)}>
                            <input type={"email"} {...register("email", {required: true})} />
                            <input type={"password"} {...register("password", {required: true})}/>
                            <input type={"submit"} value={"Sign In"}/>
                        </SignInForm>
                    </SignIn>
            }
        </Div>

    );
}

export default AuthModal;