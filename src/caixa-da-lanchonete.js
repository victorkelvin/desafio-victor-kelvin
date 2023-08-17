import { cardapio } from './cardapio.js'

class CaixaDaLanchonete {

    constructor() { this.cardapio = cardapio };

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        let formasDePagamento = ['dinheiro', 'debito', 'credito'];
        let sanduiche, queijo, cafe, chantily = false;

        if (itens.length == 0) return "Não há itens no carrinho de compra!";
        console.log(itens)

        if (!formasDePagamento.includes(metodoDePagamento)) return "Forma de pagamento inválida!";


        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            
            const itemPedido = this.cardapio.find((itemPedido) => itemPedido.codigo === codigo);
            if (!itemPedido) return "Item inválido!";
            if (!parseInt(quantidade)) return "Quantidade inválida!";


            if (codigo == "sanduiche") sanduiche = true;
            if (codigo == "queijo") queijo = true;
            if (codigo == "cafe") cafe = true;
            if (codigo == "chantily") chantily = true;

        total += itemPedido.valor * quantidade; 

        }

        if ((!sanduiche && queijo) || (!cafe && chantily)) {
            return "Item extra não pode ser pedido sem o principal";
        }


        switch (metodoDePagamento) {
            case 'dinheiro':
                total *= .95;
                break;
            case 'credito': 
                total *= 1.03;
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };
