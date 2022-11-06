// Imports Frameworks
import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { userRoutes } from './routes/user'
import { poolRoutes } from './routes/pool'
import { guessRoutes } from './routes/guess'

import { gameRoutes } from './routes/game'
import { authRoutes } from './routes/auth'
 
async function bootstrap() {
    // Instanciando o Fastify
    const fastify = Fastify({
        // Passa todo o registro de atividade em log
        logger: true,
    })

    await fastify.register(cors, {
        origin: true
    })

    await fastify.register(jwt, {
        secret: 'nlwcopa',
    })

    /* Rotas */
    await fastify.register(userRoutes)
    await fastify.register(poolRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(authRoutes)

    // Ligando servidor
    await fastify.listen({ port: 5000, host: '0.0.0.0' })
}

bootstrap()