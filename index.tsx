import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { NextPage } from "next";

interface ArticleMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/articles"));
  const articles: ArticleMeta[] = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/articles", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      slug: filename.replace(".md", ""),
      excerpt: frontmatter.excerpt,
    } as ArticleMeta;
  });

  // sort by date desc
  articles.sort((a, b) => (a.date < b.date ? 1 : -1));

  return { props: { articles } };
}

const Articles: NextPage<{ articles: ArticleMeta[] }> = ({ articles }) => (
  <div className="mx-auto max-w-5xl px-4 py-16">
    <h1 className="mb-10 text-3xl font-semibold text-center">
      Insights & Articles
    </h1>
    <div className="space-y-12">
      {articles.map((article) => (
        <article key={article.slug} className="space-y-4">
          <h2 className="text-2xl font-semibold">
            <Link href={\`/articles/\${article.slug}\`}>{article.title}</Link>
          </h2>
          <p className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString("en-GB", {
              dateStyle: "long",
            })}
          </p>
          <p>{article.excerpt}</p>
          <Link
            href={\`/articles/\${article.slug}\`}
            className="text-blue-600 hover:underline"
          >
            Continue reading →
          </Link>
        </article>
      ))}
    </div>
  </div>
);
export default Articles;
