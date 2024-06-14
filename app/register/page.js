import BackgroundWrapper from '../../components/BackgroundWrapper'
import Register from '../../components/forms/Register'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main>
      <BackgroundWrapper className={styles.main}>
        <Register />
      </BackgroundWrapper>
    </main>
  )
}
