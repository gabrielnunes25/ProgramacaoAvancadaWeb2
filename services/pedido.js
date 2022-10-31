export default class PedidoService {

    static pedidos = [
        {
            id:1,
            cliente: 'Gabriel',
            itensPedido: [
                {
                    quantidade: 6, produto: 'Lapis', preco: 1.5
                },
                {
                    quantidade: 2, produto: 'Caneta', preco: 2.0
                },
            ]
        },
        {
            id:2,
            cliente: 'Luiza',
            itensPedido: [
                {
                    quantidade: 1, produto: 'Lapis', preco: 1.5
                },
                {
                    quantidade: 4, produto: 'Caneta', preco: 2.0
                },
            ]
        },
        {
            id:3,
            cliente: 'Claudio',
            itensPedido: [
                {
                    quantidade: 7, produto: 'Lapis', preco: 1.5
                },
                {
                    quantidade: 1, produto: 'Caneta', preco: 2.0
                },
            ]
        },
        {
            id:4,
            cliente: 'Maria',
            itensPedido: [
                {
                    quantidade: 3, produto: 'Lapis', preco: 1.5
                },
                {
                    quantidade: 9, produto: 'Caneta', preco: 2.0
                },
            ]
        },
    ];

    static pegarPedidos() {
        return this.pedidos;
    }

    static deletarPedido(pedido) {         
        this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
        return true;
    }

    static alterarPedido() { }


    static adicionarPedido() { }
}