import Ajv from 'ajv'
import { definitionHelper } from '../utils/schemaDefinitions'

Cypress.Commands.add('testeContrato', (schema, resposta) => {
    
    const getSchemaError = ajvErros => {
        return cy.wrap(
            `Campo: ${ajvErros[0]['instancePatch']} é inválido. Erro: ${ajvErros[0]['message']}`
        )
    }

    const ajv = new Ajv()
    const validacao = ajv.addSchema(definitionHelper).compile(schema)
    const valido = validacao(resposta)

    if (!valido) {
        getSchemaError(validacao.errors).then(schemaError => {
            throw new Error(schemaError)
        })
    } else
        expect(valido, 'Validação de contrato').to.be.true
})