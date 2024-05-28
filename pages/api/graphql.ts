import { schema } from '@/config/schema'
import { ApolloServer } from 'apollo-server-micro'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import 'reflect-metadata'


const apolloServer = new ApolloServer({ schema })

const handlerPromise: Promise<NextApiHandler> = apolloServer.start()
  .then(() => apolloServer.createHandler({ path: '/api/graphql' }))

export const config = { api: { bodyParser: false } }

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log('here')
  const handler = await handlerPromise
  console.log('there')
  return handler(req, res)
}