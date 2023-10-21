import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { client } from '../libs/client';
import Link from 'next/link';

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  return {
    props: {
      blog: data.contents,
    },
  };
};

const Home = ({ blog }) => {
  const featuredBlog = {
    id: 'your-blog-id',
    title: '世間的には40歳だけど独学でエンジニアとしてやっていく',
    publishedAt: new Date().toISOString(),
  };

  return (
    <div className={styles.container}>
      {/* ページ全体のタイトル */}
      <Head>
        <title>世間的には40歳だけど独学でエンジニアとしてやっていく</title>
      </Head>

      {/* ブログ自体のタイトルヘッダー */}
      <h1 className={styles.maintitle}>{featuredBlog.title}</h1>

      {/* 既存のブログカード */}
      {blog.map((blog) => (
        <div key={blog.id} className={styles.blogCard}>
          <Link href={`blog/${blog.id}`}>
            <div className={styles.title}>{blog.title}</div>
          </Link>
          <p className={styles.publishedAt}>公開日: {blog.publishedAt}</p>
        </div>
      ))}

      
    </div>
  );
};

export default Home;
