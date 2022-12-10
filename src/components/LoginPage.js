import { Link } from "react-router-dom"
import styled from "styled-components"

import BigLogo from "./BigLogo"
import Button from "./Button"
import Input from "./Input"

export default function LoginPage() {
  return (
    <Container>
      <BigLogo />
      <Input type="text" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <Button>Entrar</Button>
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
