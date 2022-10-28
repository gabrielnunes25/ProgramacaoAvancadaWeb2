export default class PedidoService {

    pedidos = [
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
    ];

    pegarPedidos() {
        return this.pedido
    }

    deletarPedido(){}

    alterarPedido(){}

    adicionarPedido(){}
}