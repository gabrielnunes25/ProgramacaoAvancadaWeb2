
import styles from './style.module.css'

export default function ItemPedido({ pedido }) {

    let total = 0

    pedido.itensPedido.map((ip)=>{
        total += ip.preco * ip.quantidade
    })


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div  className={styles.headerCard}>
                <h2>{pedido.cliente}</h2>
                <span>X</span>
                </div>

                <table>
                    <tr>
                        <th>Quantidade</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Total</th>
                    </tr>
                    {pedido.itensPedido.map((ip)=>{
                        return (<tr>

                            <td>{ip.quantidade}</td>
                            <td>{ip.produto}</td>
                            <td>R$ {ip.preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
                            <td>R$ {(ip.quantidade * ip.preco).toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
                        </tr>)
                    })}
                 
                    <tr>

                        <td colSpan={3}>Total:</td>
                        <td>R$ {total.toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}
