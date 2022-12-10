import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../styles/GlobalStyle"
import LoginPage from "./LoginPage"
import MarketPage from "./MarketPage"
import SignUpPage from "./SignUpPage"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
