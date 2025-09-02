//obter o o carrinho decompras
let carrinho = document.getElementById("lista-produtos");

function adicionar() {

    let produto = document.getElementById('produto');//lista de produtos oferecidos
    let valor = produto.options[produto.selectedIndex].value;//valor selecionado

    let item = valor.split(' - ');//separando nome do valor
    let nome = item[0];
    let preco = item[1].replace('R$','');    

    let sessao = document.createElement("section");//cria um elemento do tipo sessão
    let qtd = document.getElementById('quantidade')?.value||'1';//se o campo quantidade não estiver preenchido,será 1 por padrão
    let total = document.getElementById('valor-total').innerHTML.replace('R$','');//obtem o valor total
    sessao.classList.add("carrinho__produtos__produto");//adiciona estilo

    //montando tag
    sessao.innerHTML = `<span class="texto-azul">${qtd}x</span> ${nome} <span class="texto-azul">R$${preco}</span>`;

    carrinho.appendChild(sessao);//adicionando tag
    let valorTotal = parseInt(total)+(parseInt(preco)*parseInt(qtd));//montando valor total

    document.getElementById('valor-total').innerHTML = `R$ ${valorTotal}`;//inserindo valor total
}

function limpar() {
    // Seleciona todos os produtos dentro do carrinho
    let produtos = carrinho.querySelectorAll('.carrinho__produtos__produto');
    produtos.forEach(produto => produto.remove());//para cada elemento do carrinho, remova esse elemento
    document.getElementById('valor-total').innerHTML = 'R$ 0';//limpando valor total
}