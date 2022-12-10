import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../styles/GlobalStyle"
import LoginPage from "./LoginPage"
import MarketPage from "./MarketPage"
import SignUpPage from "./SignUpPage"

function App() {
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken}/>} />
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/market" element={<MarketPage token={token}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
