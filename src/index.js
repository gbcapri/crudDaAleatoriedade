const express = require("express")
const aeroporto_router = require("./routers/aeroporto.js")
const caneta_router = require("./routers/caneta.js")
const moto_router = require("./routers/moto.js")
const refrigerante_router = require("./routers/refrigerante.js")
const app = express()
const port = 3000

app.use(express.json())

app.use("/aeroporto", aeroporto_router)
app.use("/caneta", caneta_router)
app.use("/moto", moto_router)
app.use("/refrigerante", refrigerante_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})