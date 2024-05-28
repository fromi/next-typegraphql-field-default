import { TestResolver } from '@/config/TestResolver'
import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
  emitSchemaFile: process.env.NODE_ENV === 'development',
  resolvers: [TestResolver],
  validate: false
})
