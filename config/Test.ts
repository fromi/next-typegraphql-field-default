import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Test {
  @Field()
  someField: string = 'hello'
}