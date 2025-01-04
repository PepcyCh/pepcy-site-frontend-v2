import { Route, Routes } from "react-router"
import ArticleLayout from "./article-layout"
import ArticleListOrContent from "./list-or-article"
import TagsList from "./tags-list"
import TagArticles from "./tag"
import ArticlesList from "./list"

export default function ArticlesMain({
  category
}: Readonly<{
  category: string
}>) {
  return (
    <Routes>
      <Route element={<ArticleLayout category={category} />}>
        <Route index element={<ArticlesList category={category} />} />
        <Route path="tags" element={<TagsList category={category} />} />
        <Route path="tags/:tag" element={<TagArticles category={category} />} />
        <Route path=":articleNameOrPage" element={<ArticleListOrContent category={category} />} />
      </Route>
    </Routes>
  )
}
