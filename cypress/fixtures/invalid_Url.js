export const requestInvalido = {
    type: 'object',
    required: [
        'detail'
    ],
    properties: {
        detail: {
            type: 'string'
        }
    }
}