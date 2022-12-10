import styled from "styled-components"

import FloatingCartButton from "./FloatingCartButton"
import Location from "./Location"
import Item from "./Item"
import TopBar from "./TopBar"

export default function MarketPage() {
  return (
    <Container>
      <TopBar />
      <Location />

        <Item title="Doce de Leite" description="Delicioso doce de leite cremoso, made in roça." image="https://imagens2.ne10.uol.com.br/blogs-interior/cotidiano/uploads/2021/11/doce-de-leite.jpg" price={19.90} />
        <Item title="Doce de Leite" description="Delicioso doce de leite cremoso, made in roça." image="https://imagens2.ne10.uol.com.br/blogs-interior/cotidiano/uploads/2021/11/doce-de-leite.jpg" price={19.90} />
        <Item title="Doce de Leite" description="Delicioso doce de leite cremoso, made in roça." image="https://imagens2.ne10.uol.com.br/blogs-interior/cotidiano/uploads/2021/11/doce-de-leite.jpg" price={19.90} />
        <Item title="Doce de Leite" description="Delicioso doce de leite cremoso, made in roça." image="https://imagens2.ne10.uol.com.br/blogs-interior/cotidiano/uploads/2021/11/doce-de-leite.jpg" price={19.90} />

      <FloatingCartButton />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 27px 20px;
  background-color: #F7F7F7;
`
// voltamos às 20h10