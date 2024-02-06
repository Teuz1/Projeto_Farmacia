// src/services/ProdutoService.ts

import Produto from '../models/Produto';

const produtos: Produto[] = [
  { id: 1, nome: 'Produto A', descricao: 'Descrição do Produto A', preco: 10.99, categoriaId: 1 },
  { id: 2, nome: 'Produto B', descricao: 'Descrição do Produto B', preco: 20.99, categoriaId: 1 },
  { id: 3, nome: 'Produto C', descricao: 'Descrição do Produto C', preco: 15.99, categoriaId: 2 },
  { id: 4, nome: 'Produto D', descricao: 'Descrição do Produto D', preco: 25.99, categoriaId: 2 },
];

const ProdutoService = {
  getAll: async (): Promise<Produto[]> => {
    // Simula a obtenção de todos os produtos do backend
    return produtos;
  },

  getById: async (id: number): Promise<Produto | undefined> => {
    // Simula a obtenção de um produto por ID do backend
    return produtos.find(produto => produto.id === id);
  },

  add: async (produto: Produto): Promise<void> => {
    // Simula a adição de um novo produto no backend
    produtos.push(produto);
  },

  update: async (id: number, produtoData: Partial<Produto>): Promise<void> => {
    // Simula a atualização de um produto no backend
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
      produtos[produtoIndex] = { ...produtos[produtoIndex], ...produtoData };
    }
  },

  delete: async (id: number): Promise<void> => {
    // Simula a exclusão de um produto no backend
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
      produtos.splice(produtoIndex, 1);
    }
  }
};

export default ProdutoService;
