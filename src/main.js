import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const errorMessage = 'Algum erro ocorreu, recarregue a página e tente novamente';
const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

// Função para criar criar o texto "carregando"
const loading = document.createElement('element');
const carregar = () => {
  loading.innerText = 'carregando...';
  loading.classList.add('loading');
  products.appendChild(loading);
};
carregar();

// Função para criar uma lista de produtos
const createList = async () => {
  try {
    const list = await fetchProductsList('computador');
    list.forEach((param) => {
      products.appendChild(createProductElement(param));
    });
  } catch (error) {
    const errorMsg = document.createElement('element');
    errorMsg.innerText = errorMessage;
    errorMsg.classList.add('error');
    products.appendChild(errorMsg);
  } finally {
    products.removeChild(loading);
  }
};
createList();

// Função para recuperar itens do localStorage

window.onload = () => {
  const recarregarCarrinho = async () => {
    const item = getSavedCartIDs();
    const mapeandoArray = item.map((param) => fetchProduct(param));
    const itens = await Promise.all(mapeandoArray);
    itens.forEach((param) => {
      const carrinho = createProductElement(param);
      cartProducts.appendChild(carrinho);
    });
  };
  recarregarCarrinho();
};