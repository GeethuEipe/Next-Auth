import BackgroundWrapper from '../../components/BackgroundWrapper'
import Login from '../../components/forms/Login'
import styles from '../page.module.css'

export default function LoginPage() {
  return (
    <main>
      <BackgroundWrapper className={styles.main}>
        <Login />
      </BackgroundWrapper>
    </main>
  )
}
