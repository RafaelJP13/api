import express from 'express'
import cors from 'cors'
import isAdmin from './middleware/isAdmin.js'
import RouteUsers from './routes/users.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/users', RouteUsers)


// DEFINA UM MIDDLEWARE QUE VERIFIQUE SE O USUÁRIO QUE ESTÁ ENVIANDO O REQUEST TEM A PERMISSÃO DE ADMINISTRADOR
// function isAdmin(req, res, next) {
//   let { callerId } = req.params;
//   // TODO
// }

// ROTAS EXECUTANDO FUNÇÕES CRUD NA ARRAY DE USUÁRIOS, ONDE SOMENTE O ADMINISTRADOR PODE CRIAR OU DELETAR UM USUÁRIO.
// ENVIE A ID DE QUEM ESTÁ ENVIANDO O REQUEST COMO PARÂMETRO NA URL " calledId "
// CRIE AS SEGUINTES ROTAS.

//TODO
// GET /users
// POST /users
// PATCH /users/:id
// DELETE /users/:id


app.listen(3000);
