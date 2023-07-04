import React, { useState, useEffect } from 'react'
import { Background, Grid, LoginSection, Wrapper } from './Register.styles'
import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain';
import registerBg from '../../assets/imgs/registerBg.jpg'
import Logo from '../../components/Logo/Logo';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Register() {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais!')
    }

    const res = await createUser(user)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <Wrapper>
      <Grid>
        <Background background={registerBg} />
        <LoginSection>
          <Logo />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Your Name'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!loading &&
              <ButtonMain>Register</ButtonMain>
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
