import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedidos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pedidos
        </h1>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h2>Nome do cliente</h2>

            <table>
              <tr>
                <th>Quantidade</th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>3</td>
                <td>Caneta</td>
                <td>R$ 2,00</td>
                <td>R$ 6,00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lapis</td>
                <td>R$ 1,00</td>
                <td>R$ 2,00</td>
              </tr>
              <tr>
                
                <td colSpan={3}>Total:</td>
                <td>R$ 8,00</td>
              </tr>
              
            </table>
          </div>

          <div className={styles.card}>
            <h2>Nome do cliente 2</h2>

            <table>

            </table>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
        // target="_blank"
        // rel="noopener noreferrer"
        >
          Gabriel Nunes Silva
        </a>
      </footer>
    </div>
  )
}
