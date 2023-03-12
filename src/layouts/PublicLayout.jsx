import { Header } from "../components"


export const PublicLayout = ({ children }) => {
  return (
    <div className="home animate__animated animate__fadeIn">
      <Header />
      { children }
    </div>
  )
}