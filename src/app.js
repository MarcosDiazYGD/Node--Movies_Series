const express = require('express')
//? Manejo de errrres
const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('../config').api
//? Routers
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

const app = express()
//? Manipular la informacion que venga en formato JSON
app.use(express.json())
//? genera la autenticacion de la base de datos
db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err))
//? sincroniza la base de datos
db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))
//? Genera las relaciones
initModels()
//? Ruta raiz con todas las rutas disponibles
app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": `${config.host}/api/v1/users`,
        }
    })
})

//? invocacion de las rutas
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)


//? respuesta global para las url que no existan
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: `URL not found, please try with ${config.host}`,
    })
})
//? configurar el puerto donde se ejegutara el servidor
app.listen(config.port,() => {
    console.log(`Server started at port ${config.port}`)
})
 