import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"

export default function LoginPage() {
  const [city, setCity] = useState("BH")

  return (
    <Container>
      <BigLogo />
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Imagem" />
      <Input type="password" placeholder="Senha" />
      <Grid>
        <Button active={city === 'BH'} onClick={() => setCity("BH")}>BH</Button>
        <Button active={city === 'RJ'} onClick={() => setCity("RJ")}>RJ</Button>
        <Button active={city === 'SP'} onClick={() => setCity("SP")}>SP</Button>
      </Grid>
      <Button>Cadastrar</Button>
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
