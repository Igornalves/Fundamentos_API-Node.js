// swaggerDocs.js

export const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentação da API criada com Node.js de forma pura',
    },
    servers: [
        {
            url: 'http://localhost:3224',
            description: 'Servidor local',
        },
    ],
    paths: {
        '/listandoUsers': {
            get: {
                summary: 'Lista todos os usuários',
                description: 'Retorna uma lista de usuários cadastrados',
                parameters: [
                    {
                        name: 'search',
                        in: 'query',
                        description: 'Filtro de busca por nome ou email',
                        required: false,
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'Usuários retornados com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'string' },
                                            nome: { type: 'string' },
                                            email: { type: 'string' }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/criandoUsers': {
            post: {
                summary: 'Cria um novo usuário',
                description: 'Cria um novo usuário com nome e email fornecidos',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    nome: { type: 'string' },
                                    email: { type: 'string' }
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Usuário criado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'string',
                                    example: 'Usuario Criado com Sucesso !!!'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/deletandoUsers/{id}': {
            delete: {
                summary: 'Deleta um usuário',
                description: 'Remove um usuário pelo ID fornecido',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                responses: {
                    204: {
                        description: 'Usuário deletado com sucesso'
                    }
                }
            }
        },
        '/atualizandoUsers/{id}': {
            put: {
                summary: 'Atualiza um usuário',
                description: 'Atualiza as informações de um usuário existente',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string'
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    nome: { type: 'string' },
                                    email: { type: 'string' }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Usuário atualizado com sucesso',
                    }
                }
            }
        }
    }
};
