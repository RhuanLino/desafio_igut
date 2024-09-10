import express from 'express'; // Importando a biblioteca 'express'
import cors from 'cors'; // Importando a biblioteca 'cors' para gerir conflitos
import produtoRouter from './routes/produtos.js' // Importando as rotas das requisições

// Definindo o express
const server = express();

// Definindo que a resposta do express será em formato .json
server.use(express.json());
server.use(cors());

// Usando a rota raiz '/' para as rotas
server.use("/", produtoRouter);

// Atribuindo uma porta para o back-end rodar
server.listen(8000, () => {
    console.log('Server is running...');
});
