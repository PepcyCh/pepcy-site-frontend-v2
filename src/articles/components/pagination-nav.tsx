import { Link } from "react-router"

export default function PaginationNav({
  currentPage, totalPage, urlPrefix
}: Readonly<{
  currentPage: number,
  totalPage: number,
  urlPrefix: string
}>) {
  const prevUrl = urlPrefix + "/" + (currentPage - 1);
  const prev = currentPage == 1
    ? (
      <Link to={prevUrl} className="pagination-previous is-disabled">{"<"}</Link>
    )
    : (
      <Link to={prevUrl} className="pagination-previous">{"<"}</Link>
    );

  const nextUrl = urlPrefix + "/" + (currentPage + 1);
  const next = currentPage == totalPage
    ? (
      <Link to={nextUrl} className="pagination-next is-disabled">{">"}</Link>
    )
    : (
      <Link to={nextUrl} className="pagination-next">{">"}</Link>
    );

  const left = currentPage == 1
    ? (<></>)
    : currentPage == 2
      ? (<li><Link to={urlPrefix + "/1"} className="pagination-link">1</Link></li>)
      : currentPage == 3
        ? (<>
          <li><Link to={urlPrefix + "/1"} className="pagination-link">1</Link></li>
          <li><Link to={urlPrefix + "/2"} className="pagination-link">2</Link></li>
        </>)
        : (<>
          <li><Link to={urlPrefix + "/1"} className="pagination-link">1</Link></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><Link to={urlPrefix + "/" + (currentPage - 1)} className="pagination-link">{currentPage - 1}</Link></li>
        </>)

  const right = currentPage == totalPage
  ? (<></>)
  : currentPage == totalPage - 1
    ? (<li><Link to={urlPrefix + "/" + totalPage} className="pagination-link">{totalPage}</Link></li>)
    : currentPage == totalPage - 2
      ? (<>
        <li><Link to={urlPrefix + "/" + (totalPage - 1)} className="pagination-link">{totalPage - 1}</Link></li>
        <li><Link to={urlPrefix + "/" + totalPage} className="pagination-link">{totalPage}</Link></li>
      </>)
      : (<>
        <li><Link to={urlPrefix + "/" + (currentPage + 1)} className="pagination-link">{currentPage + 1}</Link></li>
        <li><span className="pagination-ellipsis">&hellip;</span></li>
        <li><Link to={urlPrefix + "/" + totalPage} className="pagination-link">{totalPage}</Link></li>
      </>)

  return (
    <nav className="pagination is-centered">
      {prev}
      {next}
      <ul className="pagination-list">
        {left}
        <Link to={urlPrefix + "/" + currentPage} className="pagination-link is-current">{currentPage}</Link>
        {right}
      </ul>
    </nav>
  )
}
