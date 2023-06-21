// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Channel, Card, Tag, Plan, CardTag } = initSchema(schema);

export {
  User,
  Channel,
  Card,
  Tag,
  Plan,
  CardTag
};