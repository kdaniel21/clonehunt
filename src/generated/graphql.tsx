import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};


export type LoginType = {
  __typename?: 'LoginType';
  accessToken: Scalars['String'];
  user: User;
};

export type MessageType = {
  __typename?: 'MessageType';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: MessageType;
  login: LoginType;
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: MessageType;
  upvoteProduct: Product;
  downvoteProduct: Product;
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateProductArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
  url: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type MutationUpvoteProductArgs = {
  id: Scalars['String'];
};


export type MutationDownvoteProductArgs = {
  id: Scalars['String'];
};

export type PageInfoType = {
  __typename?: 'PageInfoType';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
};

export type PageType = {
  __typename?: 'PageType';
  edges: Array<ProductTypeEdge>;
  totalCount: Scalars['Float'];
  pageInfo: PageInfoType;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  url: Scalars['String'];
  numOfUpvotes: Scalars['Float'];
  user: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductTypeEdge = {
  __typename?: 'ProductTypeEdge';
  node: Product;
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  product: Product;
  products: PageType;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  first: Scalars['Float'];
  after?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', user: { __typename?: 'User', id: string, username: string } } };


export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      id
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;