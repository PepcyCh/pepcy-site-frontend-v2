import { Fragment, useEffect, useState } from "react"
import ArticleTime from "./components/article-time";
import ArticleTagsList from "./components/article-tags";
import { Link, useNavigate } from "react-router";
import PaginationNav from "./components/pagination-nav";

type ArticleAbstractInfo = {
  title: string,
  url: string,
  tags: string[],
  part: string,
  create_time: number,
  last_modified: number,
};

export default function ArticlesList({
  category, page
}: Readonly<{
  category: string,
  page?: number
}>) {
  if (page == undefined) {
    page = 1;
  }

  const [articleList, setArticleList] = useState([] as ArticleAbstractInfo[])
  const [totalPageCount, setTotalPageCount] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/generated/" + category + "/_page" + page + ".json")
      .then((response) => {
        if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
          navigate("/404");
        }
        return response.json()
      })
      .then((data) => {
        setArticleList(data.articles)
        setTotalPageCount(data.page_count)
      })
  }, [category, page])

  if (totalPageCount == 0) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  }

  return (
    <>
      {
        articleList.map((article, index) => {
          const url = "/" + category + "/" + article.url;
          return (
            <Fragment key={index}>
              <div className="block">
                <Link to={url}>
                  <h2 className="title">{article.title}</h2>
                </Link>
              </div>
              <ArticleTime createTime={article.create_time} modifiedTime={article.last_modified} />
              <ArticleTagsList category={category} tags={article.tags} />
              <div className="content" dangerouslySetInnerHTML={{ __html: article.part}}></div>
              <div className="block">
                <Link to={url}>
                  阅读全文
                  <span className="material-icons">double_arrow</span>
                </Link>
              </div>
              {(index != articleList.length - 1) && (<hr />)}
            </Fragment>
          )
        })
      }
      <PaginationNav currentPage={page} totalPage={totalPageCount} urlPrefix={"/" + category} />
    </>
  )
}
