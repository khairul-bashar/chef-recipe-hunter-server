const express = require("express")
const data = require('./database/chef.json')
const app = express()
const cors = require('cors')
const port = process.env.Port || 3000


app.use(cors())
app.get("/", (req, res) => {
  res.send("Chef Cafe app is running")
})

app.get('/data', (req, res) => {
  res.send(data)
})

app.get('/data/:id', (req, res) => {
  const id = req.params.id
  const sData = data.find(sData => sData._id === id)
  res.send(sData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
