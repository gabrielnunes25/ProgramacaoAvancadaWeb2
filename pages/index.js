import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ItemPedido from '../components/ItemPedido/index.js';

import PedidoService from '../services/pedido.js';

export default function Home() {

  console.log(PedidoService.pedidos);

  const pedidos = [
    {
        cliente:'Gabriel',
        itensPedido:  [
            {
                quantidade: 6, produto: 'Lapis', preco: 1.5
            },
            {
                quantidade: 2, produto: 'Caneta', preco: 2.0
            },
        ]
    },
    {
        cliente:'Luiza',
        itensPedido:  [
            {
                quantidade: 6, produto: 'Lapis', preco: 1.5
            },
            {
                quantidade: 2, produto: 'Caneta', preco: 2.0
            },
        ]
    },
    {
        cliente:'Claudia',
        itensPedido:  [
            {
                quantidade: 6, produto: 'Lapis', preco: 1.5
            },
            {
                quantidade: 2, produto: 'Caneta', preco: 2.0
            },
        ]
    },
    {
        cliente:'Maria',
        itensPedido:  [
            {
                quantidade: 6, produto: 'Lapis', preco: 1.5
            },
            {
                quantidade: 2, produto: 'Caneta', preco: 2.0
            },
        ]
    },
];

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
          {/* <ItemPedido pedido={pedido}></ItemPedido> */}

          {pedidos.map((p)=> <ItemPedido pedido={p}></ItemPedido>)}
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
