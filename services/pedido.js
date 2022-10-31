export default class PedidoService {

    pedidos = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
        {
            id: 5,
            cliente: 'Daniel',
            itensPedido: [
                {
                    quantidade: 2, produto: 'Borracha', preco: 3
                },
                {
                    quantidade: 6, produto: 'Caneta', preco: 2.0
                },
            ]
        },
        {
            id: 6,
            cliente: 'João',
            itensPedido: [
                {
                    quantidade: 3, produto: 'Lapis', preco: 1.5
                },
                {
                    quantidade: 2, produto: 'Caneta', preco: 2.0
                },
            ]
        },
    ];

    pegarPedidos() {
        return this.pedidos;
    }

    deletarPedido(pedido) {
        this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
        return true;
    }

    alterarPedido() { }


    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
        console.log(this.pedidos);
    }
}