import styles from './Header.module.css'

function Header({ subtitle }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftGroup}>
          <h1 className={styles.titulo}>KakosKlan</h1>
          <div className={styles.navbar_items}>
            <h3 className={styles.navbar_item}>Inicio</h3>
            <h3 className={styles.navbar_item}>Galería</h3>
            <h3 className={styles.navbar_item}>Contacto</h3>
          </div>
        </div>
        <div className={styles.icons}>
          {/* aquí luego irán iconos, de momento puedes dejar texto o vacío */}
        </div>
      </div>

    </>
  )
}

export default Header
