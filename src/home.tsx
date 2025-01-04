import heroAvatar from "/avatar.jpg"
import "./home.css"

export default function Home() {
  return (
    <>
      <section className="hero is-success">
        <div className="container is-max-desktop hero-body">
          <div className="columns">
            <div className="column is-2">
              <figure className="image is-128x128">
                <img src={heroAvatar}></img>
              </figure>
            </div>
            <div className="column">
              <div className="block">
                <span className="title is-1">Pepcy CHEN</span>
              </div>
              <div className="block">
                <p className="subtitle">图形学 / 游戏开发 / ACGN / ZJUer / 前 OIer & XCPCer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main-entry container is-max-tablet">
        <div className="columns">
          <div className="column">
            <h2 className="title">文章</h2>
            <div className="block">
              <a className="button is-fullwidth is-primary is-outlined" href="/acgn">ACGN</a>
            </div>
            <div className="block">
              <a className="button is-fullwidth is-primary is-outlined" href="/note">笔记</a>
            </div>
            <div className="block">
              <a className="button is-fullwidth is-primary is-outlined" href="/algo">算法竞赛</a>
            </div>
          </div>
          <div className="column">
            <h2 className="title">资源</h2>
            <div className="block">
              <a className="button is-fullwidth is-link is-outlined" href="http://pepcy.top/icpc-templates" target="_blank">
                ICPC 算法模板
              </a>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h2 className="title is-4">其他平台</h2>
          <a href="https://github.com/PepcyCh">GitHub</a>
          <a href="https://www.zhihu.com/people/pepcy-chen">知乎</a>
          <a href="https://bgm.tv/user/551240">Bangumi</a>
        </div>
      </div>
    </>
  )
}
