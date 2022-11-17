import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date type */
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  _allCommentsMeta?: Maybe<ListMetadata>;
  _allPostsMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  Comment?: Maybe<Comment>;
  Post?: Maybe<Post>;
  User?: Maybe<User>;
};


export type Query_AllCommentsMetaArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type CommentFilter = {
  body?: InputMaybe<Scalars['String']>;
  body_neq?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  date_gt?: InputMaybe<Scalars['Date']>;
  date_gte?: InputMaybe<Scalars['Date']>;
  date_lt?: InputMaybe<Scalars['Date']>;
  date_lte?: InputMaybe<Scalars['Date']>;
  date_neq?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  post_id?: InputMaybe<Scalars['ID']>;
  post_id_neq?: InputMaybe<Scalars['ID']>;
  q?: InputMaybe<Scalars['String']>;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type PostFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  q?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
  user_id_neq?: InputMaybe<Scalars['ID']>;
  views?: InputMaybe<Scalars['Int']>;
  views_gt?: InputMaybe<Scalars['Int']>;
  views_gte?: InputMaybe<Scalars['Int']>;
  views_lt?: InputMaybe<Scalars['Int']>;
  views_lte?: InputMaybe<Scalars['Int']>;
  views_neq?: InputMaybe<Scalars['Int']>;
};

export type UserFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  Post?: Maybe<Post>;
  post_id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  Comments?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['ID'];
  title: Scalars['String'];
  User?: Maybe<User>;
  user_id: Scalars['ID'];
  views: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  Posts?: Maybe<Array<Maybe<Post>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createManyComment?: Maybe<Array<Maybe<Comment>>>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  publishComment?: Maybe<PublishCommentResponse>;
  removeComment?: Maybe<Comment>;
  removePost?: Maybe<Post>;
  removeUser?: Maybe<User>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String'];
  date?: InputMaybe<Scalars['Date']>;
  post_id: Scalars['ID'];
};


export type MutationCreateManyCommentArgs = {
  data?: InputMaybe<Array<InputMaybe<CommentInput>>>;
};


export type MutationCreateManyPostArgs = {
  data?: InputMaybe<Array<InputMaybe<PostInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  user_id: Scalars['ID'];
  views: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
};


export type MutationPublishCommentArgs = {
  input: PublishCommentInput;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePostArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  body?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  id: Scalars['ID'];
  post_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
  views?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type CommentInput = {
  body: Scalars['String'];
  date?: InputMaybe<Scalars['Date']>;
  post_id: Scalars['ID'];
};

export type PostInput = {
  title: Scalars['String'];
  user_id: Scalars['ID'];
  views: Scalars['Int'];
};

export type UserInput = {
  name: Scalars['String'];
};

export type PublishCommentInput = {
  body: Scalars['String'];
  post_id: Scalars['ID'];
};

export type PublishCommentResponse = {
  __typename?: 'PublishCommentResponse';
  body: Scalars['String'];
  id: Scalars['ID'];
  post_id: Scalars['ID'];
};

export type GetPostsWithCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsWithCommentsQuery = { __typename?: 'Query', allPosts?: Array<{ __typename?: 'Post', id: string, title: string, Comments?: Array<{ __typename?: 'Comment', body: string } | null> | null } | null> | null };

export type AddCommentMutationVariables = Exact<{
  input: PublishCommentInput;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addCommentResponse?: { __typename?: 'PublishCommentResponse', id: string, post_id: string, body: string } | null };


export const GetPostsWithCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsWithComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"Comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsWithCommentsQuery, GetPostsWithCommentsQueryVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublishCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"addCommentResponse"},"name":{"kind":"Name","value":"publishComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"rest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"StringValue","value":"Comment","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/comments","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"method"},"value":{"kind":"StringValue","value":"POST","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post_id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;