import styles from './navbar.module.css'

import Logo from '@/components/logo/Logo'
import Input from '@/components/forms/input/Input'
import CartButton from '@/components/forms/cartButton/CartButton'

export default function Navbar () {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <div className={styles.search}>
          <Input type="text" placeholder="Buscar" fullWidth />
        </div>
        <CartButton />
      </nav>
    </>
  )
}