import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/NovoPedido.module.css'
import { useEffect, useState } from 'react'

import PedidoService from '../services/pedido.js';
import { FaChevronLeft } from "react-icons/fa";

export default function NovoPedido() {

    return (
        <div className={styles.container}>

            <Head>
                <title>Novo Pedido</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>
                    Novo Pedido
                </h1>

                <form>
                    <input type='text'></input>


                    <div className={styles.grid}>
                        <Link href='/' > Cancelar </Link>
                    </div>
                </form>
            </main>

            <footer className={styles.footer}>
                <p>
                    Gabriel Nunes Silva
                </p>
            </footer>
        </div>
    )
}
