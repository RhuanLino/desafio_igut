import { db } from '../db.js' // Importando o arquivo de conexão do banco de dados

// Definindo requisição de GET para mostrar os produtos
export const getProduto = (_, res) => {
    db.query("SELECT * FROM produtos", (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

// Definindo requisição de GET para filtrar os produtos
export const filtrarProduto = (req, res) => {
    const query = "SELECT * FROM produtos WHERE nome LIKE ?";

    const nomeBusca = [req.body.nome];
    
    db.query(query, [nomeBusca], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}