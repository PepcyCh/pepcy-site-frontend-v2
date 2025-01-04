import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";
import "./article-tags.css"

export default function ArticleTagsList({
  category, tags
}: Readonly<{
  category: string,
  tags: string[]
}>) {
  if (tags == undefined) return (<></>)

  return (
    <div className="block">
      {
        tags.map((tag, index) => {
          const url = "/" + category + "/tags/" + tag;
          return (
            <Fragment key={index}>
              <Link to={url} className="tag is-link is-light article-tag">{tag}</Link>
            </Fragment>
          )
        })
      }
    </div>
  )
}
