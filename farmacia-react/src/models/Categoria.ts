// src/models/Categoria.ts
interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    produtos: Produto[];
  }
  
  export default Categoria;
  