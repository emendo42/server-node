import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send({ msg: "Hello There, This is Erick Mendoza's API" })
})

app.listen(port)
