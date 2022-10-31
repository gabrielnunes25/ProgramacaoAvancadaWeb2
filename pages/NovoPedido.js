import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/NovoPedido.module.css'
import { useEffect, useState } from 'react'

import PedidoService from '../services/pedido.js';
import { FaStepBackward } from 'react-icons/fa';

export default function NovoPedido() {
    const ps = new PedidoService()

    const [cliente, setCliente] =  useState('Kleber');

    const  [quantidade, setQuantidade] = useState(2);

    const  [produto, setProduto] = useState('Borracha');
    
    const  [preco, setPreco] = useState(2.5);

    function handleSalvarPedido(){
        console.log('Salvou')

        let pedidoAux = {
            cliente: cliente,
            itensPedido: [
                {
                    quantidade: quantidade, produto: produto, preco: preco
                },
            ]
        }

        ps.adicionarPedido(pedidoAux)
    }


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

                <form className={styles.form}>
                    <div>
                        <label htmlFor="cliente">Cliente:  </label>
                        <input type="text" id="cliente" value={cliente} onChange={e => setCliente(e.target.value)}/>
                    </div>

                    <div className={styles.formProduto}>
                        <label htmlFor="quantidade">Quantidade:  </label>
                        <input type="number" id="quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
                    </div>

                    <div>

                        <label htmlFor="produto">Produto:  </label>
                        <input type="text" id="produto" value={produto} onChange={e => setProduto(e.target.value)}/>
                    </div>
                    <div>

                        <label htmlFor="preco">Preço:  </label>
                        <input type="number" id="preco" value={preco} onChange={e => setPreco(e.target.value)}/>
                    </div>



                    <div className={styles.btns}>
                        <Link href='/' > Cancelar </Link>
                        <span className={styles.btnCadastrar} onClick={handleSalvarPedido}>
                            <Link href='/' > Cadastrar </Link>
                        </span>
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
