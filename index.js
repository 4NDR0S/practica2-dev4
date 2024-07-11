require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json())

//lista usuarios
const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
    { id: 3, username: 'alberto', password: 'alberto123' }
]

// endpoint para la ruta 'login'
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales invalidas' })
    }
})

// middleware para verificar el token
const verifyToken = (req, res, next) => {
    const token = req.headers['autorizacion'];
    if (!token) return res.status(401).json({ message: 'No se proporciono ningun token' })

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token invalido o expirado' })
        req.user = decoded;
        next();
    });
};

// Ruta para verificar el token
app.get('/verify', verifyToken, (req, res) => {
    res.json({ message: 'El Token es valido', user: req.user })
})




app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}/`)
})
