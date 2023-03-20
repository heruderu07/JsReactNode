const express = require('express');
const routes = express.Router();

//Usuario em memória para teste de autenticação:
var users = [{
    id: 1,
    name: 'Pedro Pedrada',
    email: 'user@test.com',
    password: '1234567'
}];

routes.post('/login', (req, res) => {
    const {email, password} = req.body;
    var user = users.find(user => user.email === email && user.password === password);
    if (user)
    {
        return res.status(200).json(user);
       
    }
    res.status(401).json({message: 'Invalid credentials '});
});

module.exports = routes;