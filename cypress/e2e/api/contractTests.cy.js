import { testeContratoFilms } from '../../fixtures/valid_Url'
import { requestInvalido } from '../../fixtures/invalid_Url'

describe('Valida Response', () => {

    let mensagem = 'detail:Not found'

    context('Valida Request Válido', () => {


        it('valida formato da request', () => {
            cy.request({
                method: 'GET',
                url: 'films/?format=json'
            }).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.count).eq(6)
                expect(body.results[0].episode_id).eq(4)
                expect(body.results[0].title).eq('A New Hope')
                expect(body.results[1].title).eq('The Empire Strikes Back')
                expect(body.results[2].title).eq('Return of the Jedi')
                expect(body.results[3].title).eq('The Phantom Menace')
                expect(body.results[4].title).eq('Attack of the Clones')
                expect(body.results[5].title).eq('Revenge of the Sith')

                cy.testeContrato(testeContratoFilms, body)
            })

        })
    })
})

    context('Valida Request Inválido', () => {

        it.only('Request Inválido', () => {
            cy.request({
                method: 'GET',
                url: 'people/?format=jsonx',
                failOnStatusCode: false
        }).then(({ status, body }) => {
            expect(status).to.eq(404)

            cy.testeContrato(requestInvalido, body)
        })

    })
})