import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App_public = () => {
  return (
    <div>
        <MainHeader/>
        <Outlet/>
    </div>
  )
}

export default App_public