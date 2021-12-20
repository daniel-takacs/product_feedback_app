const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`listening on port ${port}`))

app.get('/api', (req, res) => {
    res.send({ express: 'Express is connected to React' })
})

