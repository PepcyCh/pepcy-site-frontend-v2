import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="message is-danger">
      <div className="message-header">
        <p>Not Found</p>
      </div>
      <div className="message-body content">
        <p>似乎访问到了错误的 URL，<Link to="/">回主页</Link></p>
      </div>
    </div>
  )
}
