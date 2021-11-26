import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import NewsList from '../components/NewsList';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NewsList />
    </div>
  )
}

export default Home
