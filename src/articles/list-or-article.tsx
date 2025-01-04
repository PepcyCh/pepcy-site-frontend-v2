import { useParams } from "react-router"
import Article from "./article";
import ArticlesList from "./list";

export default function ArticleListOrContent({
  category
}: Readonly<{
  category: string
}>) {
  const { articleNameOrPage } = useParams();
  if (articleNameOrPage == undefined) return (<></>)

  const page = Number(articleNameOrPage);
  if (Number.isNaN(page)) {
    return (
      <Article category={category} articleName={articleNameOrPage} />
    )
  } else {
    return (
      <ArticlesList category={category} page={page} />
    )
  }
}
