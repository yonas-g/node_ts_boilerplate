"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = {
    mongoUrl: 'mongodb://localhost:27017/myapp',
};
exports.options = {
    basedir: __dirname,
    files: ['../routes/api/v1/*.js'],
    swaggerDefinition: {
        basePath: '/api/v1',
        host: 'localhost:3000',
        info: {
            description: 'Node Ts Starter Code',
            title: 'Node Ts Rest API',
            version: '1.0.0',
        },
        produces: [
            'application/json',
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                description: '',
                in: 'header',
                name: 'Authorization',
                type: 'apiKey',
            },
        },
    },
};
//# sourceMappingURL=config.js.map