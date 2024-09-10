import express from 'express'; // Importando a biblioteca 'express' para fazer requisições HTTP e construção do back-end
import { getProduto, filtrarProduto } from '../controllers/produtos.js' // Importando os controllers de filtrar e mostrar produtos

// Definindo o 'router' do express para consumir os controllers
const router = express.Router(); 

router.get('/', getProduto);
router.get('/', filtrarProduto);

export default router;