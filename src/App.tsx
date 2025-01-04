import { Routes, Route, Link } from "react-router"
import Home from "./home"
import ContentLayout from "./content-layout"
import About from "./about"
import AboutSite from "./about-sie"
import ArticlesMain from "./articles/page"
import NotFound from "./components/not-found"
import "./App.css"

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<ContentLayout />}>
          <Route path="about" element={<About />} />
          <Route path="about-site" element={<AboutSite />} />
          <Route path="acgn/*" element={<ArticlesMain category="acgn" />} />
          <Route path="note/*" element={<ArticlesMain category="note" />} />
          <Route path="algo/*" element={<ArticlesMain category="algo" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <footer className="footer">
        <nav className="breadcrumb is-centered has-bullet-separator" aria-label="breadcrumb">
          <ul>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/about">关于我</Link></li>
            <li><Link to="/about-site">关于本站</Link></li>
          </ul>
        </nav>
        <div className="content has-text-centered">
          <p>Copyright © 2017-2025 - Pepcy CHEN</p>
        </div>
      </footer>
    </>
  )
}
