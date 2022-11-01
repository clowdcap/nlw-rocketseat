"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports Frameworks
const fastify_1 = __importDefault(require("fastify"));
async function bootstrap() {
    // Instanciando o Fastify
    const fastify = (0, fastify_1.default)({
        // Passa todo o registro de atividade em log
        logger: true,
    });
    // Ligando servidor
    await fastify.listen({ port: 5000 });
}
bootstrap();
