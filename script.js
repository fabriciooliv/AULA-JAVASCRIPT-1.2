// Método simples: Adicionando o título ao site
document.body.innerHTML += '<h1 id="titulo">Loja de Produtos</h1>';

// Método complexo: Criando e adicionando um produto
const produto = document.createElement('div'); // Div principal que contém o produto
produto.id = 'produto'; // Define um ID para o produto

// Criando elementos filhos para o produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto X';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Este é um excelente produto X, que oferece tudo o que você precisa.';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,90';

// Opcional: Adicionando uma imagem ao produto
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150'; // Substitua pela URL da imagem real
imagemProduto.alt = 'Imagem do Produto X';

// Inserindo os elementos criados dentro da div principal
produto.appendChild(imagemProduto);
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

// Adicionando o produto ao corpo do documento
document.body.appendChild(produto);
