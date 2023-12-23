import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API with Swagger',
        version: '1.0.0',
        description: 'This is a simple API application made with Express and documented with Swagger',
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT}`,
            description: 'Development server',
        },
    ],
    components: {
        schemas: {
            Permission: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                },
                required: ['id', 'name'],
            },
            Role: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    permissions: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Permission' },
                    },
                },
                required: ['id', 'name', 'permissions'],
            },
            // ... other schemas ...
        },
    },
};

const options = {
    swaggerDefinition,
    apis: [
        './routes/*.ts',
        './dist/routes/*.js'
    ],
};

export const swaggerSpec = swaggerJSDoc(options);
