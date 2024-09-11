let nextId = 1

const model = (body, id = nextId++) => {

    if (
        body.marca != undefined &&
        body.marca != "" &&
        body.cor != undefined &&
        body.cor != "" &&
        body.modelo != undefined &&
        body.modelo != "" &&
        body.cilindrada != undefined &&
        body.cilindrada != "" &&
        !isNaN(Number(body.cilindrada)) &&
        body.peso != undefined &&
        body.peso != "" &&
        !isNaN(Number(body.peso))

    ) {
        return {
            id,
            marca: body.marca,
            cor: body.cor,
            modelo: body.modelo,
            cilindrada: Number(body.cilindrada),
            peso: body.peso
        }
    }
}

module.exports = model