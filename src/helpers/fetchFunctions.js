const URL = 'https://api.mercadolibre.com/items/'
export const fetchProduct = async (param) => {
  if (!param) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${URL}${param}`);
  const data = await response.json();
  return data;
};

const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado')
  }
  const response = await fetch(`${url}${query}`);
  const data = await response.json();
  return data;
};
