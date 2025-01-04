import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"

export default function TagArticles({
  category
}: Readonly<{
  category: string,
}>) {
  const { tag } = useParams();
  const navigate = useNavigate();
  if (tag == undefined) {
    navigate("/" + category + "/tags");
    return;
  }

  const [tagArticles, setTagArticles] = useState([] as string[][])

  useEffect(() => {
    fetch("/generated/" + category + "/_tag_" + decodeURIComponent(tag) + ".json")
      .then((response) => {
        if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
          navigate("/404");
        }
        return response.json()
      })
      .then((data) => {
        setTagArticles(data)
      })
  }, [category])

  return (
    <>
      <div className="block">
        <h2 className="title">{"标签：" + tag}</h2>
      </div>
      <div className="block">
        {
          tagArticles.map((tagArticle, index) => {
            const url = "/" + category + "/" + tagArticle[1];
            return (
              <Fragment key={index}>
                <div className="block">
                  <Link to={url}>
                    <h2 className="subtitle">{tagArticle[0]}</h2>
                  </Link>
                </div>
                <div className="block">
                  <Link to={url}>
                    阅读全文
                    <span className="material-icons">double_arrow</span>
                  </Link>
                </div>
                {(index != tagArticles.length - 1) && (<hr />)}
              </Fragment>
            )
          })
        }
      </div>
    </>
  )
}
