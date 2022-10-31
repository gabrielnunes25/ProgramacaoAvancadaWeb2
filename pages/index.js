import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import ItemPedido from '../components/ItemPedido/index.js';

import PedidoService from '../services/pedido.js';

export default function Home() {

  const [pedidos, setPedidos] = useState([...PedidoService.pegarPedidos()]);

  const btnLixo = (pedido) => {
    if (PedidoService.deletarPedido(pedido)) {   
      let temp = pedidos.filter(p=>p !== pedido);
      setPedidos(temp);
    }
  }

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
          {pedidos.map((p, index) => <ItemPedido pedido={p} key={index} action={btnLixo}></ItemPedido>)}
        </div> 
      </main>

      <div className={styles.btnAdicionar}>
        <Link href='/NovoPedido'>+</Link>
      </div>

      <footer className={styles.footer}>
        <p>
          Gabriel Nunes Silva
        </p>
      </footer>
    </div>
  )
}
