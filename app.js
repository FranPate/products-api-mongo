const express = require('express');
const bodyParser = require('body-parser');

// Routes
const authRoutes = require('./routers/auth').router;
const productsRoutes = require('./routers/products').router;


const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req,res) => {
    //console.log(req);
    res.status(200).send('Hello world')
});

app.use('/auth', authRoutes)

app.use('/products', productsRoutes)

app.post('/products/:productid', (req,res) => {
    console.log(req);
    res.status(200).send('Hello world')
})

app.get('/products/:productid', (req,res,) => {
    rconsole.log(req);
    res.status(200).send('Hello world')
})

app.delete('/products/:productid', (req,res) => {
    console.log(req);
    res.status(200).send('Hello world')
})

app.put('/products/:productid', () => {
    console.log(req);
    res.status(200).send('Hello world')
})

app.listen(port, () => {
    console.log('Server started at port 3000')
})

exports.app = app;