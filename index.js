const server = require("./api/app.js")

const port = process.env.PORT || 8080

server.listen(port, () => {
    console.log(`running on port ${port}`)
})
