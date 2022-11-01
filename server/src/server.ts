// Imports Frameworks
import Fastify, { fastify } from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

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

    // Criando rotas
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

    // Ligando servidor
    await fastify.listen({ port: 5000, host: '0.0.0.0' })
}

bootstrap()