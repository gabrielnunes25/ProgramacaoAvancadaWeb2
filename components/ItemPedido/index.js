
import styles from './style.module.css'
import { FaTrash } from "react-icons/fa";

import PedidoService from '../../services/pedido';

export default function ItemPedido({ pedido, action }) {

    let total = 0;
    pedido.itensPedido.map((ip) => {
        total += ip.preco * ip.quantidade;
    })

    const btnLixo = () => {
        // alert('tenso')
        // PedidoService.deletarPedido(pedido);
        action(pedido)
    }


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.headerCard}>
                    <h2>{pedido.cliente}</h2>
                    <span onClick={btnLixo} className={styles.btnLixo}><FaTrash /></span>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Quantidade</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pedido.itensPedido.map((ip, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ip.quantidade}</td>
                                    <td>{ip.produto}</td>
                                    <td>R$ {ip.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
                                    <td>R$ {(ip.quantidade * ip.preco).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan={3}>Total:</td>
                            <td>R$ {total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
