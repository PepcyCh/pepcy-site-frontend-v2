import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import ArticleTime from "./components/article-time"
import ArticleTagsList from "./components/article-tags"
import "./article.css"

type ArticleData = {
  title: string,
  tags: string[],
  create_time: number,
  last_modified: number,
  toc: string,
  html: string,
}

export default function Article({
  category, articleName,
}: Readonly<{
  category: string,
  articleName: string,
}>) {
  const [articleData, setArticleData] = useState({} as ArticleData)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/generated/" + category + "/" + articleName + ".json")
      .then((response) => {
        if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
          navigate("/404");
        }
        return response.json()
      })
      .then((data) => {
        setArticleData(data)
      })
  }, [category, articleName])

  const [showToc, setShowToc] = useState(false);

  return (
    <>
      <div className="block">
        <h1 className="title is-1">{articleData.title}</h1>
      </div>
      <ArticleTime createTime={articleData.create_time} modifiedTime={articleData.last_modified} />
      <ArticleTagsList category={category} tags={articleData.tags} />
      <div className="content article-content" dangerouslySetInnerHTML={{ __html: articleData.html}}></div>

      {
        articleData.toc != undefined && articleData.toc.length > 0 && (showToc
          ? <div className="toc-card">
            <header className="title is-5">
              <span className="material-icons">toc</span>目录
            </header>
            <button className="delete" onClick={() => setShowToc(false)}></button>
            <div className="card-content">
              <div className="toc-content" dangerouslySetInnerHTML={{ __html: articleData.toc}}></div>
            </div>
          </div>
          : <button className="button is-rounded is-link is-small toc-button" onClick={() => setShowToc(true)}>
            <span className="material-icons">toc</span>目录
          </button>
        )
      }
    </>
  )
}
