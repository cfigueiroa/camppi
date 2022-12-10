import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"

export default function LoginPage({ setToken }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/login"
    const body = { email, password }

    const promise = axios.post(URL, body)
    promise.then((res) => {
      setToken(res.data.token)
      navigate("/market")
    })
    promise.catch((err) => alert(err.response.data.message))
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={login}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>
      <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F60919;
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`
