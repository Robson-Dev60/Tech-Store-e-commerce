// tag let cria uma variavel.
let textoPesquisa = ""
let categoriaAtual = "all"
let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7.999,
        precoOriginal: 8.999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8.999,
        precoOriginal: 10.999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1.899,
        precoOriginal: 2.299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5.499,
        precoOriginal: 6.299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3.299,
        precoOriginal: 3.799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2.499,
        precoOriginal: 2.999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7.999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];
let conteinerProdutos = document.querySelector(".products")
let input = document.querySelector(".search-input")
let todosBotoes = document.querySelectorAll(".btn")
//  document-buscar no html  (querySelector- selecionar algo que foi buscado)
function mostrarProdutos() {
    let htmlProdutos = ""
    //                           -includes->o valor esta incluso na pesquisa
    let produtosFiltrados = produtos.filter(prd => {

        let passouCategoria = (categoriaAtual === "all" || prd.categoria === categoriaAtual)

        let passouPesquisa = prd.nome.toLowerCase().includes(textoPesquisa.toLowerCase())
        return passouPesquisa && passouCategoria

        //               (toLowerCase-> passar letras maiusculas para minusculas)
    })
    // o "prd" usado no forEach e no filter não são o mesmo, o do forEach e valisdo apenas dentro do proprio forEach, e assim vale pro filter.

    produtosFiltrados.forEach(prd => {

        htmlProdutos = htmlProdutos + `
         <div class="carde-produto">
                <img class="imagem-produto" src="${prd.imagem}" alt="${prd.nome}">
                <div class="info-product">
                    <h3 class="nome-product">${prd.nome}</h3>
                    <p class="descricao-product">${prd.descricao}</p>
                    <p class="preco-product"> R$${prd.preco},00</p>
                   <button class="botao-product" onclick="window.location.href='https://wa.link/lrd6ub'">entre em contato</button>

                </div>
            </div>      
       `
    });
    conteinerProdutos.innerHTML = htmlProdutos
}
function pesquisar() {
    textoPesquisa = input.value
    mostrarProdutos()

}
function trocarCategoria(categoria) {
    categoriaAtual = categoria;

    todosBotoes.forEach(botao => {
        botao.classList.remove('active')

        if (botao.getAttribute("data-category") === categoria) {
            botao.classList.add('active')
        }
        mostrarProdutos();
    })
}

window.addEventListener('DOMContentLoaded', function () {

    // mostrar todos os produtos
    mostrarProdutos()
    // ouvinte de eventos no imput
    input.addEventListener('input', pesquisar)

    // ouvinte de eventos em TODOS os botões
    todosBotoes.forEach(botao => {
        botao.addEventListener('click', function () {
            let categoria = botao.getAttribute("data-category");


            trocarCategoria(categoria)

        });
    });
})


// add enent lister -> adicionar ouvinte de evento

