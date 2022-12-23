import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"

export default function LoginPage() {
  const [city, setCity] = useState("BH")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function createAccount(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/sign-up"
    const body = { name, email, image, password, city }

    const promise = axios.post(URL, body)
    promise.then(res => {
      alert("Cadastro realizado!")
      navigate("/")
    })
    promise.catch((err) => alert(err.response.data.message))
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={createAccount}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="url"
          placeholder="Imagem"
          value={image}
          onChange={e => setImage(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Grid>
          <Button type="button" active={city === 'BH'} onClick={() => setCity("BH")}>BH</Button>
          <Button type="button" active={city === 'RJ'} onClick={() => setCity("RJ")}>RJ</Button>
          <Button type="button" active={city === 'SP'} onClick={() => setCity("SP")}>SP</Button>
        </Grid>
        <Button type="submit">Cadastrar</Button>
      </form>
      <StyledLink to="/">Já possui uma conta? Faça login</StyledLink>
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

const Grid = styled.div`
  display: flex;
  width: 100%;

  *:not(:last-child) {
    margin-right: 10px;
  }
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`
