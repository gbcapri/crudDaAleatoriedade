let nextId = 1

const model = (body, id = nextId++) => {

    if (
        body.porcentagem_suco != undefined &&
        body.porcentagem_suco != "" &&
        !isNaN(Number(body.porcentagem_suco)) &&
        body.kcalEm200ml != undefined &&
        body.kcalEm200ml != "" &&
        !isNaN(Number(body.kcalEm200ml)) &&
        body.sabor != undefined &&
        body.sabor != "" &&
        body.tamanhoEmMl != undefined &&
        body.tamanhoEmMl != "" &&
        !isNaN(Number(body.tamanhoEmMl))
    ) {
        return {
            id,
            porcentagem_suco: Number(body.porcentagem_suco),
            kcalEm200ml: Number(body.kcalEm200ml),
            sabor: body.sabor,
            tamanhoEmMl: Number(body.tamanhoEmMl),  
        }
    }
}

module.exports = model