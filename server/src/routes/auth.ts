import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
//import { prisma } from '../lib/prisma'

export async function authRoutes(fastify: FastifyInstance) {
  fastify.get('/me', async (request) => {
    await request.jwtVerify()

    return {
      user: request.user
    }
  })

  fastify.post('/users', async (request) => {
    const createPoolBody = z.object({
      access_token: z.string()
    })

    const { access_token } = createPoolBody.parse(request.body)
  
    const userRespose = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    const userData = await userRespose.json()

    const userInfoSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string(),
      picture: z.string().url(),
    })

    const userInfo = userInfoSchema.parse(userData)

    let user = await prisma.user.findUnique({
      where: {
        googleId: userInfo.id,
      }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          googleId: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          avatarUrl: userInfo.picture,
        }
      })
    }
  
    const token = fastify.jwt.sign({
      name: user.name,
      avatarUrl: user.avatarUrl,

    }, {
      sub: user.id,
      expiresIn: '2 days'
    })

    return { token }
  })
}