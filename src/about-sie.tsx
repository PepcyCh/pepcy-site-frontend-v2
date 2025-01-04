import { Link } from "react-router";

export default function AboutSite() {
  return (
    <>
      <h2 className="title">关于本站</h2>
      <div className="block">
        大概在 2017 年的时候，和当时不少 OIer 一样，用了 Hexo 生成静态博客 + GitHub pages 部署的方式搞了第一版，之后搞了免费的 .cf 域名和相应的 DNS。起初内容和不少 OIer 一样，是以刷题时记录题解为主，辅以一些比赛的游记。
      </div>
      <div className="block">
        打完 2019 EC-Final 彻底退役后，就不再有什么算法竞赛相关的更新了，转而是一些 CG 相关的笔记，逐渐产生了将二者按类分开的想法。加上课程大程中有了一些网页开发的经历，虽然是奇怪的 Rust 为主的技术栈，而不是用 js 什么的。应该是在 2022 年年初，本科最后的寒假中实践了这一想法，用 Rust 的前端框架 Yew 写了第二版的网页，文章的 Markdown 处理也是拿 Rust 自己写了。域名换成了阿里云买的 .top 域名，部署则从本来放梯子的 VPS 提供商那里搞了另一个 VPS，用 Nginx，毕竟要被 serve 的只有静态文件。整个实践记录在了 <Link to="/note/Rust%EF%BC%88Yew%EF%BC%89%E5%BC%80%E5%8F%91%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E7%9A%84%E5%B0%9D%E8%AF%95">Rust（Yew）开发个人博客的尝试</Link>中。
      </div>
      <div className="block">
        2024 年年末的时候，随着硕士毕业相关的主要事项一一完成，一是想以进入新的阶段为由做些整理，二是感觉原来那一版前端搞得没那么好看，有了第三版的想法。第三版的变动没有那么大，域名和服务器都不变，路由设计也不变，后端提供预处理好的静态文件的设计也是不变。主要的变动是重写了前端，这次是用了 TS + React 来写前端，用 Vite 做了脚手架，样式上依然主要依赖 Bulma.css，以及这次有 GPT 来教我。从结果上来说，可能前端好看了一点，也许。
      </div>
    </>
  )
}
