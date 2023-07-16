import { Cabecera } from "../components/Cabecera"

export const HomeLayout = ({ children }) => {
  return (
    <>
        <Cabecera />
        
        {children}
    </>
  )
}
