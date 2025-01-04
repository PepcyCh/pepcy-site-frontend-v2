import { Link, Outlet } from "react-router"
import heroAvatar from "/avatar.jpg"
import "./content-layout.css"

export default function ContentLayout() {
  return (
    <>
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <figure className="image is-24x24">
              <img className="is-rounded" src={heroAvatar}></img>
            </figure>
            <p><strong>
              <span className="material-icons">home</span>主页
            </strong></p>
          </Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-main">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar-main" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <p><strong>Pepcy CHEN</strong></p>
            </div>
          </div>
        </div>
      </nav>
      <div className="container is-max-desktop main-container">
        <Outlet />
      </div>
    </>
  )
}
