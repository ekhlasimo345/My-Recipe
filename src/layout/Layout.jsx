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
      <footer>
        <p>
          Legal information
        </p>
      </footer>
    </div>
    )
}
export default Layout 