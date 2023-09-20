export const testeContratoFilms = {
    type: 'object',
    required: [
        'count',
        'next',
        'previous',
        'results'
    ],
    properties: {
        count: {
            type: 'integer'
        },
        next: {
            type: 'null'
        },
        previous: {
            type: 'null'
        },
        results: {
            type: 'array',
            items: {
                type: 'object',
                required: [
                    'title',
                    'episode_id',
                    'opening_crawl',
                    'director',
                    'producer',
                    'release_date',
                    'characters',
                    'planets',
                    'starships',
                    'vehicles',
                    'species',
                    'created',
                    'edited',
                    'url'
                ],
                properties: {
                    title: {
                        type: 'string'
                    },
                    episode_id: {
                        type: 'integer'
                    },
                    opening_crawl: {
                        type: 'string'
                    },
                    director: {
                        type: 'string'
                    },
                    producer: {
                        type: 'string'
                    },
                    release_date: {
                        type: 'string'
                    },
                    characters: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    planets: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    starships: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    vehicles: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    species: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    created: {
                        type: 'string'
                    },
                    edited: {
                        type: 'string'
                    },
                    url: {
                        type: 'string'
                    }
                }
            }
        }
    }
}