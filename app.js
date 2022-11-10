const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Worldssss!')
})

app.get('/prueba', (req, res) => {
    res.send('Abuela')
})

app.get('/adios', (req, res) => {
    res.send('Adios' + req)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})