/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onCreateChannel(filter: $filter) {
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
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel($filter: ModelSubscriptionChannelFilterInput) {
    onUpdateChannel(filter: $filter) {
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
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel($filter: ModelSubscriptionChannelFilterInput) {
    onDeleteChannel(filter: $filter) {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
    onCreateCard(filter: $filter) {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
    onUpdateCard(filter: $filter) {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
    onDeleteCard(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
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
export const onCreateCardTag = /* GraphQL */ `
  subscription OnCreateCardTag($filter: ModelSubscriptionCardTagFilterInput) {
    onCreateCardTag(filter: $filter) {
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
export const onUpdateCardTag = /* GraphQL */ `
  subscription OnUpdateCardTag($filter: ModelSubscriptionCardTagFilterInput) {
    onUpdateCardTag(filter: $filter) {
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
export const onDeleteCardTag = /* GraphQL */ `
  subscription OnDeleteCardTag($filter: ModelSubscriptionCardTagFilterInput) {
    onDeleteCardTag(filter: $filter) {
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
