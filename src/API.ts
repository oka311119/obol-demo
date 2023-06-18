/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name: string,
  profileImageUrl: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name: string,
  profileImageUrl: string,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  Channels?: ModelChannelConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelChannelConnection = {
  __typename: "ModelChannelConnection",
  items:  Array<Channel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Channel = {
  __typename: "Channel",
  id: string,
  name: string,
  canDelete: boolean,
  thumbnailUrl?: string | null,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  userID: string,
  Cards?: ModelCardConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items:  Array<Card | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Card = {
  __typename: "Card",
  id: string,
  channelId: string,
  question: string,
  answer: string,
  level: number,
  dueDate?: string | null,
  questionImageUrl?: Array< string | null > | null,
  answerImageUrl?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  channelID: string,
  Tags?: ModelCardTagConnection | null,
  Plans?: ModelPlanConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCardTagConnection = {
  __typename: "ModelCardTagConnection",
  items:  Array<CardTag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CardTag = {
  __typename: "CardTag",
  id: string,
  cardId: string,
  tagId: string,
  card: Card,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  tagName: string,
  createdAt: string,
  updatedAt: string,
  deletedAt?: string | null,
  cards?: ModelCardTagConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPlanConnection = {
  __typename: "ModelPlanConnection",
  items:  Array<Plan | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Plan = {
  __typename: "Plan",
  id: string,
  planDate: string,
  score: number,
  createdAt: string,
  cardID: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  profileImageUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateChannelInput = {
  id?: string | null,
  name: string,
  canDelete: boolean,
  thumbnailUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelChannelConditionInput = {
  name?: ModelStringInput | null,
  canDelete?: ModelBooleanInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelChannelConditionInput | null > | null,
  or?: Array< ModelChannelConditionInput | null > | null,
  not?: ModelChannelConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChannelInput = {
  id: string,
  name?: string | null,
  canDelete?: boolean | null,
  thumbnailUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteChannelInput = {
  id: string,
  _version?: number | null,
};

export type CreateCardInput = {
  id?: string | null,
  channelId: string,
  question: string,
  answer: string,
  level: number,
  dueDate?: string | null,
  questionImageUrl?: Array< string | null > | null,
  answerImageUrl?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  channelID: string,
  _version?: number | null,
};

export type ModelCardConditionInput = {
  channelId?: ModelStringInput | null,
  question?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  level?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  questionImageUrl?: ModelStringInput | null,
  answerImageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  channelID?: ModelIDInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCardInput = {
  id: string,
  channelId?: string | null,
  question?: string | null,
  answer?: string | null,
  level?: number | null,
  dueDate?: string | null,
  questionImageUrl?: Array< string | null > | null,
  answerImageUrl?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  channelID?: string | null,
  _version?: number | null,
};

export type DeleteCardInput = {
  id: string,
  _version?: number | null,
};

export type CreateTagInput = {
  id?: string | null,
  tagName: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  tagName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateTagInput = {
  id: string,
  tagName?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  deletedAt?: string | null,
  _version?: number | null,
};

export type DeleteTagInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlanInput = {
  id?: string | null,
  planDate: string,
  score: number,
  createdAt?: string | null,
  cardID: string,
  _version?: number | null,
};

export type ModelPlanConditionInput = {
  planDate?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  and?: Array< ModelPlanConditionInput | null > | null,
  or?: Array< ModelPlanConditionInput | null > | null,
  not?: ModelPlanConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdatePlanInput = {
  id: string,
  planDate?: string | null,
  score?: number | null,
  createdAt?: string | null,
  cardID?: string | null,
  _version?: number | null,
};

export type DeletePlanInput = {
  id: string,
  _version?: number | null,
};

export type CreateCardTagInput = {
  id?: string | null,
  cardId: string,
  tagId: string,
  _version?: number | null,
};

export type ModelCardTagConditionInput = {
  cardId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelCardTagConditionInput | null > | null,
  or?: Array< ModelCardTagConditionInput | null > | null,
  not?: ModelCardTagConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateCardTagInput = {
  id: string,
  cardId?: string | null,
  tagId?: string | null,
  _version?: number | null,
};

export type DeleteCardTagInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChannelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  canDelete?: ModelBooleanInput | null,
  thumbnailUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelChannelFilterInput | null > | null,
  or?: Array< ModelChannelFilterInput | null > | null,
  not?: ModelChannelFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  channelId?: ModelStringInput | null,
  question?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  level?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  questionImageUrl?: ModelStringInput | null,
  answerImageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  channelID?: ModelIDInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  tagName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  deletedAt?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlanFilterInput = {
  id?: ModelIDInput | null,
  planDate?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  cardID?: ModelIDInput | null,
  and?: Array< ModelPlanFilterInput | null > | null,
  or?: Array< ModelPlanFilterInput | null > | null,
  not?: ModelPlanFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCardTagFilterInput = {
  id?: ModelIDInput | null,
  cardId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelCardTagFilterInput | null > | null,
  or?: Array< ModelCardTagFilterInput | null > | null,
  not?: ModelCardTagFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  profileImageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChannelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  canDelete?: ModelSubscriptionBooleanInput | null,
  thumbnailUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChannelFilterInput | null > | null,
  or?: Array< ModelSubscriptionChannelFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  channelId?: ModelSubscriptionStringInput | null,
  question?: ModelSubscriptionStringInput | null,
  answer?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionIntInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  questionImageUrl?: ModelSubscriptionStringInput | null,
  answerImageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  channelID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tagName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  deletedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  planDate?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  cardID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCardTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cardId?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCardTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardTagFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChannelMutationVariables = {
  input: CreateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type CreateChannelMutation = {
  createChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChannelMutationVariables = {
  input: UpdateChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type UpdateChannelMutation = {
  updateChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChannelMutationVariables = {
  input: DeleteChannelInput,
  condition?: ModelChannelConditionInput | null,
};

export type DeleteChannelMutation = {
  deleteChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePlanMutationVariables = {
  input: CreatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type CreatePlanMutation = {
  createPlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePlanMutationVariables = {
  input: UpdatePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type UpdatePlanMutation = {
  updatePlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePlanMutationVariables = {
  input: DeletePlanInput,
  condition?: ModelPlanConditionInput | null,
};

export type DeletePlanMutation = {
  deletePlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCardTagMutationVariables = {
  input: CreateCardTagInput,
  condition?: ModelCardTagConditionInput | null,
};

export type CreateCardTagMutation = {
  createCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCardTagMutationVariables = {
  input: UpdateCardTagInput,
  condition?: ModelCardTagConditionInput | null,
};

export type UpdateCardTagMutation = {
  updateCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCardTagMutationVariables = {
  input: DeleteCardTagInput,
  condition?: ModelCardTagConditionInput | null,
};

export type DeleteCardTagMutation = {
  deleteCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      profileImageUrl: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      Channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      profileImageUrl: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      Channels?:  {
        __typename: "ModelChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChannelQueryVariables = {
  id: string,
};

export type GetChannelQuery = {
  getChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelsQuery = {
  listChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      id: string,
      name: string,
      canDelete: boolean,
      thumbnailUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      userID: string,
      Cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChannelsQuery = {
  syncChannels?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      id: string,
      name: string,
      canDelete: boolean,
      thumbnailUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      userID: string,
      Cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ChannelsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChannelsByUserIDQuery = {
  channelsByUserID?:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      id: string,
      name: string,
      canDelete: boolean,
      thumbnailUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      userID: string,
      Cards?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCardsQuery = {
  syncCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CardsByChannelIDQueryVariables = {
  channelID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CardsByChannelIDQuery = {
  cardsByChannelID?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlanQueryVariables = {
  id: string,
};

export type GetPlanQuery = {
  getPlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPlansQueryVariables = {
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlansQuery = {
  listPlans?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      planDate: string,
      score: number,
      createdAt: string,
      cardID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlansQueryVariables = {
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlansQuery = {
  syncPlans?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      planDate: string,
      score: number,
      createdAt: string,
      cardID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PlansByCardIDQueryVariables = {
  cardID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlansByCardIDQuery = {
  plansByCardID?:  {
    __typename: "ModelPlanConnection",
    items:  Array< {
      __typename: "Plan",
      id: string,
      planDate: string,
      score: number,
      createdAt: string,
      cardID: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCardTagQueryVariables = {
  id: string,
};

export type GetCardTagQuery = {
  getCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCardTagsQueryVariables = {
  filter?: ModelCardTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardTagsQuery = {
  listCardTags?:  {
    __typename: "ModelCardTagConnection",
    items:  Array< {
      __typename: "CardTag",
      id: string,
      cardId: string,
      tagId: string,
      card:  {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCardTagsQueryVariables = {
  filter?: ModelCardTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCardTagsQuery = {
  syncCardTags?:  {
    __typename: "ModelCardTagConnection",
    items:  Array< {
      __typename: "CardTag",
      id: string,
      cardId: string,
      tagId: string,
      card:  {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CardTagsByCardIdQueryVariables = {
  cardId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCardTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CardTagsByCardIdQuery = {
  cardTagsByCardId?:  {
    __typename: "ModelCardTagConnection",
    items:  Array< {
      __typename: "CardTag",
      id: string,
      cardId: string,
      tagId: string,
      card:  {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CardTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCardTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CardTagsByTagIdQuery = {
  cardTagsByTagId?:  {
    __typename: "ModelCardTagConnection",
    items:  Array< {
      __typename: "CardTag",
      id: string,
      cardId: string,
      tagId: string,
      card:  {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    profileImageUrl: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    Channels?:  {
      __typename: "ModelChannelConnection",
      items:  Array< {
        __typename: "Channel",
        id: string,
        name: string,
        canDelete: boolean,
        thumbnailUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnCreateChannelSubscription = {
  onCreateChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChannelSubscriptionVariables = {
  filter?: ModelSubscriptionChannelFilterInput | null,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel?:  {
    __typename: "Channel",
    id: string,
    name: string,
    canDelete: boolean,
    thumbnailUrl?: string | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    userID: string,
    Cards?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        channelId: string,
        question: string,
        answer: string,
        level: number,
        dueDate?: string | null,
        questionImageUrl?: Array< string | null > | null,
        answerImageUrl?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        deletedAt?: string | null,
        channelID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    channelId: string,
    question: string,
    answer: string,
    level: number,
    dueDate?: string | null,
    questionImageUrl?: Array< string | null > | null,
    answerImageUrl?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    channelID: string,
    Tags?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Plans?:  {
      __typename: "ModelPlanConnection",
      items:  Array< {
        __typename: "Plan",
        id: string,
        planDate: string,
        score: number,
        createdAt: string,
        cardID: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string | null,
    cards?:  {
      __typename: "ModelCardTagConnection",
      items:  Array< {
        __typename: "CardTag",
        id: string,
        cardId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
};

export type OnCreatePlanSubscription = {
  onCreatePlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
};

export type OnUpdatePlanSubscription = {
  onUpdatePlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePlanSubscriptionVariables = {
  filter?: ModelSubscriptionPlanFilterInput | null,
};

export type OnDeletePlanSubscription = {
  onDeletePlan?:  {
    __typename: "Plan",
    id: string,
    planDate: string,
    score: number,
    createdAt: string,
    cardID: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCardTagSubscriptionVariables = {
  filter?: ModelSubscriptionCardTagFilterInput | null,
};

export type OnCreateCardTagSubscription = {
  onCreateCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCardTagSubscriptionVariables = {
  filter?: ModelSubscriptionCardTagFilterInput | null,
};

export type OnUpdateCardTagSubscription = {
  onUpdateCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCardTagSubscriptionVariables = {
  filter?: ModelSubscriptionCardTagFilterInput | null,
};

export type OnDeleteCardTagSubscription = {
  onDeleteCardTag?:  {
    __typename: "CardTag",
    id: string,
    cardId: string,
    tagId: string,
    card:  {
      __typename: "Card",
      id: string,
      channelId: string,
      question: string,
      answer: string,
      level: number,
      dueDate?: string | null,
      questionImageUrl?: Array< string | null > | null,
      answerImageUrl?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      channelID: string,
      Tags?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Plans?:  {
        __typename: "ModelPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      deletedAt?: string | null,
      cards?:  {
        __typename: "ModelCardTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
