/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      profileImageUrl
      createdAt
      updatedAt
      deletedAt
      Channels {
        items {
          id
          name
          canDelete
          thumbnailUrl
          createdAt
          updatedAt
          deletedAt
          userID
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      profileImageUrl
      createdAt
      updatedAt
      deletedAt
      Channels {
        items {
          id
          name
          canDelete
          thumbnailUrl
          createdAt
          updatedAt
          deletedAt
          userID
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      profileImageUrl
      createdAt
      updatedAt
      deletedAt
      Channels {
        items {
          id
          name
          canDelete
          thumbnailUrl
          createdAt
          updatedAt
          deletedAt
          userID
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
      id
      name
      canDelete
      thumbnailUrl
      createdAt
      updatedAt
      deletedAt
      userID
      Cards {
        items {
          id
          channelId
          question
          answer
          level
          dueDate
          questionImageUrl
          answerImageUrl
          createdAt
          updatedAt
          deletedAt
          channelID
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
      id
      name
      canDelete
      thumbnailUrl
      createdAt
      updatedAt
      deletedAt
      userID
      Cards {
        items {
          id
          channelId
          question
          answer
          level
          dueDate
          questionImageUrl
          answerImageUrl
          createdAt
          updatedAt
          deletedAt
          channelID
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
      id
      name
      canDelete
      thumbnailUrl
      createdAt
      updatedAt
      deletedAt
      userID
      Cards {
        items {
          id
          channelId
          question
          answer
          level
          dueDate
          questionImageUrl
          answerImageUrl
          createdAt
          updatedAt
          deletedAt
          channelID
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      channelId
      question
      answer
      level
      dueDate
      questionImageUrl
      answerImageUrl
      createdAt
      updatedAt
      deletedAt
      channelID
      Tags {
        items {
          id
          cardId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Plans {
        items {
          id
          planDate
          score
          createdAt
          cardID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
      id
      channelId
      question
      answer
      level
      dueDate
      questionImageUrl
      answerImageUrl
      createdAt
      updatedAt
      deletedAt
      channelID
      Tags {
        items {
          id
          cardId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Plans {
        items {
          id
          planDate
          score
          createdAt
          cardID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
      id
      channelId
      question
      answer
      level
      dueDate
      questionImageUrl
      answerImageUrl
      createdAt
      updatedAt
      deletedAt
      channelID
      Tags {
        items {
          id
          cardId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Plans {
        items {
          id
          planDate
          score
          createdAt
          cardID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      tagName
      createdAt
      updatedAt
      deletedAt
      cards {
        items {
          id
          cardId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      tagName
      createdAt
      updatedAt
      deletedAt
      cards {
        items {
          id
          cardId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      tagName
      createdAt
      updatedAt
      deletedAt
      cards {
        items {
          id
          cardId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      planDate
      score
      createdAt
      cardID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      planDate
      score
      createdAt
      cardID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      planDate
      score
      createdAt
      cardID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createCardTag = /* GraphQL */ `
  mutation CreateCardTag(
    $input: CreateCardTagInput!
    $condition: ModelCardTagConditionInput
  ) {
    createCardTag(input: $input, condition: $condition) {
      id
      cardId
      tagId
      card {
        id
        channelId
        question
        answer
        level
        dueDate
        questionImageUrl
        answerImageUrl
        createdAt
        updatedAt
        deletedAt
        channelID
        Tags {
          nextToken
          startedAt
          __typename
        }
        Plans {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      tag {
        id
        tagName
        createdAt
        updatedAt
        deletedAt
        cards {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateCardTag = /* GraphQL */ `
  mutation UpdateCardTag(
    $input: UpdateCardTagInput!
    $condition: ModelCardTagConditionInput
  ) {
    updateCardTag(input: $input, condition: $condition) {
      id
      cardId
      tagId
      card {
        id
        channelId
        question
        answer
        level
        dueDate
        questionImageUrl
        answerImageUrl
        createdAt
        updatedAt
        deletedAt
        channelID
        Tags {
          nextToken
          startedAt
          __typename
        }
        Plans {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      tag {
        id
        tagName
        createdAt
        updatedAt
        deletedAt
        cards {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteCardTag = /* GraphQL */ `
  mutation DeleteCardTag(
    $input: DeleteCardTagInput!
    $condition: ModelCardTagConditionInput
  ) {
    deleteCardTag(input: $input, condition: $condition) {
      id
      cardId
      tagId
      card {
        id
        channelId
        question
        answer
        level
        dueDate
        questionImageUrl
        answerImageUrl
        createdAt
        updatedAt
        deletedAt
        channelID
        Tags {
          nextToken
          startedAt
          __typename
        }
        Plans {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      tag {
        id
        tagName
        createdAt
        updatedAt
        deletedAt
        cards {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
