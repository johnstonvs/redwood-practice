import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <h2>
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </h2>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
