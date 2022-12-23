import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"
import AuthContext from "../contexts/AuthContext"
import UserContext from "../contexts/UserContext"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setToken } = useContext(AuthContext)
  const { setUser } = useContext(UserContext)

  function login(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/login"
    const body = { email, password }

    const promise = axios.post(URL, body)
    promise.then((res) => {
      setUser({ name: res.data.name, cityName: res.data.cityName, image: res.data.image })
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
