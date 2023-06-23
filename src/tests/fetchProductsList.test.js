import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {

    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('Retorno da função fetch com o argumento computador é uma estrutura igual ao objeto computadorSearch', async () => {
    const data =  await fetchProductsList('computador');
    expect(typeof data).toEqual(typeof computadorSearch);
  });

  it('Teste se ao chamar a função fetchProductsList sem argumento retorna um erro com a mensagem Termo de busca não informado', async () => {
    expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });

  // it('...', () => {
  // });
});
