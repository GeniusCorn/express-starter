import express from 'express'

const api = express()

api.get('/', (req, res) => {
  res.send('Hello api!')
})

export default api
