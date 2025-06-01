import { Outlet } from "react-router";
import Navigation from "../pages/Navigation";
function Layout(){
    return (
<div className="layout">
      <header>
        <Navigation/>
      </header>
      <main>
        <Outlet />
      </main>
      
    </div>
    )
}
export default Layout 