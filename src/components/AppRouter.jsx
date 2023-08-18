import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Links } from "../pages/links"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/links" element= { <Links/> } />

        <Route path="/*" element = { <Navigate to="/"/> } />
    </Routes>
  )
}
