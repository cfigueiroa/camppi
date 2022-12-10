import styled from "styled-components"

import FloatingCartButton from "./FloatingCartButton"
import Location from "./Location"
import Item from "./Item"
import TopBar from "./TopBar"
import { useEffect, useState } from "react"
import axios from "axios"

export default function MarketPage({ token }) {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/items/"

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => setFoods(res.data))
    promise.catch((err) => console.log(err.response.data))
  }, [])

  return (
    <Container>
      <TopBar />
      <Location />
      {foods.map(f => (
        <Item
          key={f.id}
          title={f.name}
          description={f.description}
          image={f.image}
          price={f.price} />
      ))}
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