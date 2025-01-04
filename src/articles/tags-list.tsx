import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router"

type TagData = {
  name: string,
  count: number,
};

export default function TagsList({
  category
}: Readonly<{
  category: string
}>) {
  const [tags, setTags] = useState([] as TagData[])
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/generated/" + category + "/_tag.json")
      .then((response) => {
        if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
          navigate("/404");
        }
        return response.json()
      })
      .then((data) => {
        setTags(data)
      })
  }, [category])

  return (
    <>
      <div className="block">
        <h2 className="title">标签</h2>
      </div>
      <div className="block">
        <div className="grid">
          {
            tags.map((tag, index) => (
              <Fragment key={index}>
                <div className="cell">
                  <Link to={"/" + category + "/tags/" + encodeURIComponent(tag.name)} className="tag is-link is-light is-medium article-tag">
                    {tag.name + " (" + tag.count + ")"}
                  </Link>
                </div>
              </Fragment>
            ))
          }
        </div>
      </div>
    </>
  )
}
