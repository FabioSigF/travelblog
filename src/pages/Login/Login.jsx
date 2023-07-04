import React, { useState, useEffect } from 'react'
import { Background, Grid, LoginSection, Wrapper } from './Login.styles'
import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain';
import loginBg from '../../assets/imgs/loginBg.jpg'
import Logo from '../../components/Logo/Logo';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <Wrapper>
      <Grid>
        <Background background={loginBg} />
        <LoginSection>
          <Logo />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder='Your Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!loading &&
              <ButtonMain>Login</ButtonMain>
            }
            {loading &&
              <ButtonMain>Wait...</ButtonMain>
            }
            {error &&
              <p className="error">{error}</p>
            }
            
          </form>
        </LoginSection>
      </Grid>
    </Wrapper>
  )
}
