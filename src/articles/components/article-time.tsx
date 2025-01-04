export default function ArticleTime({
  createTime, modifiedTime
}: Readonly<{
  createTime: number,
  modifiedTime: number,
}>) {
  const createDate = new Date(createTime * 1000 - 8 * 60 * 60 * 1000)
  const modifiedDate = new Date(modifiedTime * 1000 - 8 * 60 * 60 * 1000)

  return (
    <div className="block">
      <span className="material-icons">insert_invitation</span>
      <span>
        发表于：{createDate.toLocaleString()}
      </span>
      <span className="m-2">  </span>
      <span className="material-icons">edit_calendar</span>
      <span>
        更新于：{modifiedDate.toLocaleString()}
      </span>
    </div>
  )
}
