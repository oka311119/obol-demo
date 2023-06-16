import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly profileImageUrl: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly Channels?: (Channel | null)[] | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly profileImageUrl: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly Channels: AsyncCollection<Channel>;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChannel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Channel, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly canDelete: boolean;
  readonly thumbnailUrl?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly userID: string;
  readonly Cards?: (Card | null)[] | null;
}

type LazyChannel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Channel, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly canDelete: boolean;
  readonly thumbnailUrl?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly userID: string;
  readonly Cards: AsyncCollection<Card>;
}

export declare type Channel = LazyLoading extends LazyLoadingDisabled ? EagerChannel : LazyChannel

export declare const Channel: (new (init: ModelInit<Channel>) => Channel) & {
  copyOf(source: Channel, mutator: (draft: MutableModel<Channel>) => MutableModel<Channel> | void): Channel;
}

type EagerCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Card, 'id'>;
  };
  readonly id: string;
  readonly channelId: string;
  readonly question: string;
  readonly answer: string;
  readonly level: number;
  readonly dueDate?: string | null;
  readonly questionImageUrl?: (string | null)[] | null;
  readonly answerImageUrl?: (string | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly channelID: string;
  readonly Tags?: (CardTag | null)[] | null;
  readonly Plans?: (Plan | null)[] | null;
}

type LazyCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Card, 'id'>;
  };
  readonly id: string;
  readonly channelId: string;
  readonly question: string;
  readonly answer: string;
  readonly level: number;
  readonly dueDate?: string | null;
  readonly questionImageUrl?: (string | null)[] | null;
  readonly answerImageUrl?: (string | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly channelID: string;
  readonly Tags: AsyncCollection<CardTag>;
  readonly Plans: AsyncCollection<Plan>;
}

export declare type Card = LazyLoading extends LazyLoadingDisabled ? EagerCard : LazyCard

export declare const Card: (new (init: ModelInit<Card>) => Card) & {
  copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
  };
  readonly id: string;
  readonly tagName: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly cards?: (CardTag | null)[] | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
  };
  readonly id: string;
  readonly tagName: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deletedAt?: string | null;
  readonly cards: AsyncCollection<CardTag>;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly planDate: string;
  readonly score: number;
  readonly createdAt: string;
  readonly cardID: string;
  readonly updatedAt?: string | null;
}

type LazyPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly planDate: string;
  readonly score: number;
  readonly createdAt: string;
  readonly cardID: string;
  readonly updatedAt?: string | null;
}

export declare type Plan = LazyLoading extends LazyLoadingDisabled ? EagerPlan : LazyPlan

export declare const Plan: (new (init: ModelInit<Plan>) => Plan) & {
  copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}

type EagerCardTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CardTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cardId?: string | null;
  readonly tagId?: string | null;
  readonly card: Card;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCardTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CardTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cardId?: string | null;
  readonly tagId?: string | null;
  readonly card: AsyncItem<Card>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CardTag = LazyLoading extends LazyLoadingDisabled ? EagerCardTag : LazyCardTag

export declare const CardTag: (new (init: ModelInit<CardTag>) => CardTag) & {
  copyOf(source: CardTag, mutator: (draft: MutableModel<CardTag>) => MutableModel<CardTag> | void): CardTag;
}