import React from 'react';
import styled from "styled-components";

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

const ChildDiv = styled.div`
  width: 350px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
`;

function AuthModal() {
    return (
        <Div>
            <ChildDiv>
                <h1>hello</h1>
            </ChildDiv>
        </Div>

    );
}

export default AuthModal;