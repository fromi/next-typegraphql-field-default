import { Test } from '@/config/Test'
import { Query, Resolver } from 'type-graphql'

@Resolver(() => Test)
export class TestResolver {

  @Query(() => Test)
  async test() {
    return {} as Test
  }
}