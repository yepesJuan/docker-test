const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()
app.use(cors())

app.get('/', (req,res) => {
  res.send('🐳 Dockerrr is cool! 🐳')
})



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
})
