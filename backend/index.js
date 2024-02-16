const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user.js');
dotenv.config();

// conexion a la base de datos de mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("conexion exitosa a mongodb!")
    })
    .catch(err => {
        res.send("Error al conectarse a mongoDB");
        console.error(err);
    })

app.use(cors());

// parseamos la informacion del cuerpo de las peticiones http
app.use(express.urlencoded({extends: true}));
app.use(express.json());

// ruta para crear usuario
app.post('/users', async (req, res) => {
    const { username, name, lastname, age } = req.body;
    console.log({username, name, lastname, age: +age});
    try {
        const userSaved = new User({
            username,
            name,
            lastname,
            age: +age
        });
        const user = await userSaved.save();
        res.json(user);
    } catch (err) {
        console.error("error:", err);
        res.send("error al crear el usuario");
    }
});

// ruta para leer los usuarios de la base de datos
app.get('/users', async (req, res) => {
    User.find()
        .sort({ name: 1 })
        .exec()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(404);
        })
})

// ruta para editar los usuarios de la base de datos
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, name, lastname, age } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {
            username,
            name,
            lastname,
            age
        });
        res.send(user);
    } catch (err) {
        console.error(err);
        res.send("error al editar el usuario");
    }
});

// ruta para eliminar los usuarios de la base de datos
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        res.send(user);
    } catch (err) {
        console.error(err);
        res.send("error al eliminar el usuario");
    }
});

//middleware para manejar errores inoportunos
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("error interno del servidor");
});


// puerto al que escuchamos
app.listen(process.env.PORT, () => {
    console.log('server listening on port: ' + `http://localhost:${process.env.PORT}`);
});