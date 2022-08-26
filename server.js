const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send("The shit is running")
})

app.post('/', (req, res) => {
  res.send('This is a fucking post request')
})

app.listen(PORT, () => {
  console.log(`The server is running so fucking good`)
})