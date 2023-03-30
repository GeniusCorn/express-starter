import express from 'express'
import cors from 'cors'

import api from './api'

const app = express()
const port = 3000

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use(
  cors({
    origin: '*',
    methods: ['*']
  })
)

app.use('/api', api)

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(port, () => {
  console.log(`Express server is running on port ${port}.`)
})
