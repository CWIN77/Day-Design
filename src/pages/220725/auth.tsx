import type { NextPage } from 'next'
import styled from 'styled-components'
import SVG_email from "./svgs/email.svg"
import SVG_lock from "./svgs/lock.svg"
import SVG_fingerprint from "./svgs/fingerprint.svg"
import { useState } from 'react'

const Auth: NextPage = () => {
  const iconStyle = { width: 20, height: 20, fill: "rgba(0,0,0,0.6)", style: { padding: 6 } };
  const [signType, setSignType] = useState(true); // true = login, false = join
  return (
    <Container>
      <AppName>Rapha.</AppName>
      <AuthWrap>
        <h2>Login</h2>
        <AuthInputBox>
          <SVG_email {...iconStyle} />
          <AuthInput placeholder="E-Mail" />
        </AuthInputBox>
        <AuthInputBox>
          <SVG_lock {...iconStyle} />
          <AuthInput placeholder="Password" />
        </AuthInputBox>
        <AuthEtc>
          <div>
            <input type={"checkbox"} />
            <h3>Stay signed in</h3>
          </div>
          <div onClick={() => { setSignType(!signType); }}>
            <h3>Sign up</h3>
          </div>
        </AuthEtc>
        <AuthCheckWrap>
          <AuthCheckBtn>Sign in</AuthCheckBtn>
          <AuthCheckFP>
            <SVG_fingerprint width="32" height="32" fill="white" />
          </AuthCheckFP>
        </AuthCheckWrap>
      </AuthWrap>
    </Container>
  );
}

const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color: #000522;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const AppName = styled.h1`
  font-size: 28px;
`
const AuthWrap = styled.span`
  display:flex;
  flex-direction: column;
  width: 78vw;
  max-width: 400px;
  h2{
    width:calc(100% - 16px);
    font-size:13px;
    padding: 12px 8px;
  }
`
const AuthInputBox = styled.span`
  display:flex;
  align-items: center;
  padding: 0px 12px;
  background-color: #FFFFFF;
  width:calc(100% - 24px);
  border-radius: 10px;
  margin: 8px 0px;
`
const AuthInput = styled.input`
  font-size: 13px;
  width:100%;
  padding: 16px 0px;
`
const AuthEtc = styled.span`
  display:flex;
  width:100%;
  justify-content: space-between;
  opacity:0.8;
  div{
    padding: 2px 4px;
    display:flex;
    h3{
      font-size: 10px;
      margin-left: 2px;
    }
  }
`
const AuthCheckWrap = styled.span`
  display:flex;
  margin-top: 55px;
`
const AuthCheckBtn = styled.button`
  padding: 12px;
  width:100%;
  background-color: #FF5D8E;
  color:white;
  font-size: 13px;
  border-radius: 10px;
`
const AuthCheckFP = styled.button`
  background-color: #FF5D8E;
  color:white;
  padding: 10px 12px;
  margin-left: 16px;
  border-radius: 10px;
`

export default Auth