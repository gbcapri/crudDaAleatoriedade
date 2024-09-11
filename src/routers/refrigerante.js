const express = require("express");
const refrigerante_controller = require("../controllers/refrigerante.js")
const router = express.Router();//prestar atenção pois Router tem que ser maiúsculo

router.get("/", (req, res) => {
    res.json(refrigerante_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(refrigerante_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = refrigerante_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = refrigerante_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    refrigerante_controller.destroy(req.params.id)
    res.json()
})

module.exports = router