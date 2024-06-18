import BackgroundWrapper from '../../components/BackgroundWrapper'
import UserList from '../../components/forms/UserList'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main>
      <BackgroundWrapper className={styles.main}>
        <UserList />
      </BackgroundWrapper>
    </main>
  )
}
