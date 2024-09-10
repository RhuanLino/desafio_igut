import mysql from 'mysql'; // Importando a biblioteca 'mysql' para Node.js

// Criando conexão com o mysql
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rl29082003',
    database: 'db_produtos'
});

db.connect(function(err) {
    if (err) throw err;
});
