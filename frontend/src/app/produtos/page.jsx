'use client'
import axios from "axios"; // Para consumo da API
import { useEffect, useState } from "react"; // Para criar estados mutáveis e 
import { Input } from "@/components/ui/input"; // Componente do Shadcn de input
import Image from "next/image"; // Componente do Next.js para imagens
import Search from "@/images/search.svg"; // Ícone de busca

// Esta função é o componente responsável pela página de produtos

const Produtos = () => {
  
  // Instanciando os produtos e o estado de busca
  const [produtos, setProdutos] = useState([]);  
  const [findProdutos, setFindProdutos] = useState('');
  
  // Rota da API no back-end para requisição HTTP de GET que consulta todos os produtos
  const getProduto = async () => {
    try {
      const res = await axios.get("http://localhost:8000");
      setProdutos(res.data);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect (() => {
    getProduto();
  }, []);

  // Rota da API no back-end para requisição HTTP de GET que consulta apenas o que é buscado
  const filtrarProduto = async (findProdutos) => {
    try {
      const res = await axios.get("http://localhost:8000", {
        params: {nome: findProdutos},
      });
      setProdutos(res.data);
    } catch (error) {
      console.error("Erro ao buscar produtos: ", error);
    }
  }

  // Handle para pegar o valor do input
  const handleFind = (e) => {
    const value = e.target.value;
    setFindProdutos(value);
    
  // Condição para executar a busca
    if (value) {
      filtrarProduto(value);
    } else {
      getProduto();
    }
  }
  
  // Filtro para os produtos e formatação para letras minúsculas
  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(findProdutos.toLowerCase())
  );
  
  return (
      <div>
          <div className="flex items-center justify-center pt-10">
            <header className="flex space-x-2 w-1/3">
                <Image src={Search} width={35} alt="search_icon" />
                <Input 
                type="search" 
                placeholder="Pesquisar"
                value={findProdutos} onChange={handleFind }
                />
            </header>
          </div>
          <ul role="list" className="m-10 divide-y divide-gray-900">
            {/* Função que mapeia os dados dos produtos e retorna o valor no front-end */}
            {produtosFiltrados.map((item, i) => (
              <li key={item.nome} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-white">{item.nome}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">R$ {item.preco}</p>
                    </div>
                </div>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Estoque</p>
                </div>
              </li>
            ))}
          </ul>
      </div>
  ) 
}
 
export default Produtos;