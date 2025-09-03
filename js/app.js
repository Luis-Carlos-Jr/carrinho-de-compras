//obter o o carrinho decompras
let carrinho = document.getElementById("lista-produtos");
limpar();//inicializando com o carrinho limpo

function adicionar() {

    let produto = document.getElementById('produto');//lista de produtos oferecidos
    let valor = produto.options[produto.selectedIndex].value;//valor selecionado

    let item = valor.split(' - ');//separando nome do valor
    let nome = item[0];
    let preco = item[1].replace('R$','');
    let qtd = document.getElementById('quantidade').value;

    //validando o campo de quantidade
    //verifica se numero é maior que zero ou se não é numerico
    if(qtd < 1 || isNaN(parseInt(qtd)) || isNaN(parseFloat(qtd))){
        alert('Quantidade deve ser um númeroválido maior que zero!');
        return;
    }
    //let qtd = document.getElementById('quantidade')?.value||'1';//se o campo quantidade não estiver preenchido, será 1 por padrão
   
    //não precisa, neste caso, declarar a variável total fora da função, pois o código aqui, pega o valor total atual já escrito na tela
    let total = document.getElementById('valor-total').innerHTML.replace('R$','');//obtem o valor total
    let valorTotal = parseFloat(total)+(parseFloat(preco.toFixed(2))*parseFloat(qtd));//montando valor total

    //inserindo novos itens no carrinho
    //observe a necessidade de concatenação de Sections para que o novo item não sobrescreva o antigo
    carrinho.innerHTML += `<section class="carrinho__produtos__produto"> <span class="texto-azul">${qtd}x`+
    `</span> ${nome} <span class="texto-azul">R$ ${preco}</span> </section>`;

    document.getElementById('valor-total').innerHTML = `R$ ${valorTotal}`;//inserindo valor total
    document.getElementById('quantidade').value = '';
}

function limpar() {
    // Seleciona todos os produtos dentro do carrinho
    let carrinho = document.getElementById("lista-produtos").innerHTML = '';

    //outra abordagem valida para fins didaticos
    // let produtos = carrinho.querySelectorAll('.carrinho__produtos__produto');
    // produtos.forEach(produto => produto.remove());//para cada elemento do carrinho, remova esse elemento
    
    document.getElementById('valor-total').innerHTML = 'R$ 0';//limpando valor total
}