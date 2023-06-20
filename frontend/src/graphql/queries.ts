/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        profileImageUrl
        createdAt
        updatedAt
        deletedAt
        Channels {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        name
        profileImageUrl
        createdAt
        updatedAt
        deletedAt
        Channels {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
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
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        canDelete
        thumbnailUrl
        createdAt
        updatedAt
        deletedAt
        userID
        Cards {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChannels = /* GraphQL */ `
  query SyncChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChannels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        canDelete
        thumbnailUrl
        createdAt
        updatedAt
        deletedAt
        userID
        Cards {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const channelsByUserID = /* GraphQL */ `
  query ChannelsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        canDelete
        thumbnailUrl
        createdAt
        updatedAt
        deletedAt
        userID
        Cards {
          nextToken
          startedAt
          __typename
        }
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
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
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCards = /* GraphQL */ `
  query SyncCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const cardsByChannelID = /* GraphQL */ `
  query CardsByChannelID(
    $channelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardsByChannelID(
      channelID: $channelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
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
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncPlans = /* GraphQL */ `
  query SyncPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const plansByCardID = /* GraphQL */ `
  query PlansByCardID(
    $cardID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    plansByCardID(
      cardID: $cardID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCardTag = /* GraphQL */ `
  query GetCardTag($id: ID!) {
    getCardTag(id: $id) {
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
export const listCardTags = /* GraphQL */ `
  query ListCardTags(
    $filter: ModelCardTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCardTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCardTags = /* GraphQL */ `
  query SyncCardTags(
    $filter: ModelCardTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCardTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const cardTagsByCardId = /* GraphQL */ `
  query CardTagsByCardId(
    $cardId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCardTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardTagsByCardId(
      cardId: $cardId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const cardTagsByTagId = /* GraphQL */ `
  query CardTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCardTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
