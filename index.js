const {main} = require('./api')
const express = require("express");

// Creating express app object
const app = express();

// Handling '/' route
app.get("/", async (req, res) => {
    const data = await main()
    res.send(data);
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running on http://localhost:3000");
})