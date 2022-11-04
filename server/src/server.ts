// Imports Frameworks
import Fastify, { fastify } from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import ShortUniqueId from 'short-unique-id'

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap() {
    // Instanciando o Fastify
    const fastify = Fastify({
        // Passa todo o registro de atividade em log
        logger: true,
    })

    await fastify.register(cors, {
        origin: true
    })

    // http://localhost:5000

    // Criando rotas - Get
    fastify.get('/pools/count', async ()=> {

        // const pools = await prisma.pool.findMany({
        //     where: {
        //         code: {
        //             startsWith: 'J'
        //         }
        //     }
        // })
        // return { pools }
        
        const count = await prisma.pool.count()
        return { count }
    })

    fastify.get('/users/count', async ()=> {
        const count = await prisma.user.count()
        return { count }
    })

    fastify.get('/guesses/count', async ()=> {
        const count = await prisma.guess.count()
        return { count }
    })

    // Rotas Geral - Post
    fastify.post('/pools', async (request, reply) => {
        const createPoolBody = z.object({
            title: z.string(),
        })
        const { title } = createPoolBody.parse(request.body)

        const generate = new ShortUniqueId({length: 6})
        const code = String(generate()).toUpperCase()

        await prisma.pool.create({
            data: {
                title,
                code,
            }
        })
        return reply.status(201).send({ code })
        // return { title }
    })

    

    // Ligando servidor
    await fastify.listen({ port: 5000, host: '0.0.0.0' })
}

bootstrap()