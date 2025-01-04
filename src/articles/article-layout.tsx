import { Link, Outlet } from "react-router"

export default function ArticleLayout({
  category
}: Readonly<{
  category: string
}>) {
  return (
    <>
      <nav className="breadcrumb" aria-label="sub navigation">
        <ul>
          <li><Link to={"/" + category}>
            <span className="material-icons">description</span>
            文章列表
          </Link></li>
          <li><Link to={"/" + category + "/tags"}>
            <span className="material-icons">sell</span>
            标签列表
          </Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
