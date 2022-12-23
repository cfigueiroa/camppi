import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../styles/GlobalStyle"
import LoginPage from "./LoginPage"
import MarketPage from "./MarketPage"
import SignUpPage from "./SignUpPage"
import AuthContext from "../contexts/AuthContext"
import UserContext from "../contexts/UserContext"

function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})
  // [token, setToken]
  // {token: token, setToken: setToken} === {token, setToken}

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/market" element={<MarketPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
