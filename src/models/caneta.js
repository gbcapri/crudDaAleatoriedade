let nextId = 1

const model = (body, id = nextId++) => {

    if (
        body.cor != undefined &&
        body.cor  != "" &&
        typeof body.ehBic === 'boolean'
    ) {
        return {
            id,
            cor: body.cor,
            ehBic: body.ehBic,
        }
    }
}

module.exports = model