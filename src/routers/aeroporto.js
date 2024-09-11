const express = require("express");
const aeroporto_controller = require("../controllers/aeroporto.js")
const router = express.Router();//prestar atenção pois Router tem que ser maiúsculo

router.get("/", (req, res) => {
    res.json(aeroporto_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(aeroporto_controller.show(req.params.id))
})

router.post("/", cep_endereco, (req, res) => {
    const code = aeroporto_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", cep_endereco, (req, res) => {
    const code = aeroporto_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    aeroporto_controller.destroy(req.params.id)
    res.json()
})

module.exports = router