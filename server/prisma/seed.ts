import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Jose',
      email: 'josinho@gmail.com',
      avatarUrl: 'https://github.com/clowdcap.png'
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Exemple Pool',
      code: 'POOL1',
      ownerId: user.id,
  
      participants: {
        create: {
          userId: user.id
        }
      }
    }
  })

  const participant = await prisma.participant.create({
    data: {
      poolId: pool.id,
      userId: user.id,
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T14:00:00.201Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR', 
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-04T15:00:00.201Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',
      
      guesses: {
        create: {
          firstTeamPoints: 1,
          secondTeamPoints: 2,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              }
            }
          }
        }
      }
    }
  })
}




main()