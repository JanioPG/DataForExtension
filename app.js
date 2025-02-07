require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8081

app.use(
    cors({
        origin: "https://dataforextension.onrender.com",
    })
)

app.get('/', (req, res) => {
    res.send('Aqui você pode obter dados (json) para testar extensions.');
})

app.get('/user', (req, res) => {
    let userData = {
        name: "Gandalf",
        country: "Unknown",
        age: 102
    }
    res.json(userData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})