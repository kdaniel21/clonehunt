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
  logout: MessageType;
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: MessageType;
  upvoteProduct: Product;
  removeProductUpvote: Product;
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
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationUpvoteProductArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProductUpvoteArgs = {
  id: Scalars['ID'];
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
  upvoteCount: Scalars['Float'];
  isUpvotedByCurrentUser: Scalars['Boolean'];
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
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  first: Scalars['Float'];
  after?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, username: string, email?: Maybe<string> } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', user: { __typename?: 'User', id: string, username: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MessageType', message: string } };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'MessageType', message: string } };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, name: string, description: string, url: string, upvoteCount: number, isUpvotedByCurrentUser: boolean, createdAt: any, user: { __typename?: 'User', id: string, username: string } } };

export type GetProductsQueryVariables = Exact<{
  first: Scalars['Float'];
  after?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
}>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'PageType', totalCount: number, edges: Array<{ __typename?: 'ProductTypeEdge', node: { __typename?: 'Product', id: string, name: string, description: string, upvoteCount: number, isUpvotedByCurrentUser: boolean } }>, pageInfo: { __typename?: 'PageInfoType', hasNextPage: boolean, endCursor?: Maybe<string> } } };

export type RemoveProductUpvoteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveProductUpvoteMutation = { __typename?: 'Mutation', removeProductUpvote: { __typename?: 'Product', upvoteCount: number, isUpvotedByCurrentUser: boolean } };

export type UpvoteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UpvoteProductMutation = { __typename?: 'Mutation', upvoteProduct: { __typename?: 'Product', upvoteCount: number, isUpvotedByCurrentUser: boolean } };


export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    username
    email
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
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
export const LogoutDocument = gql`
    mutation logout {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!, $email: String) {
  register(username: $username, password: $password, email: $email) {
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetProductDocument = gql`
    query getProduct($id: ID!) {
  product(id: $id) {
    id
    name
    description
    url
    upvoteCount
    isUpvotedByCurrentUser
    user {
      id
      username
    }
    createdAt
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($first: Float!, $after: String, $startDate: DateTime!, $endDate: DateTime!) {
  products(first: $first, after: $after, startDate: $startDate, endDate: $endDate) {
    edges {
      node {
        id
        name
        description
        upvoteCount
        isUpvotedByCurrentUser
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const RemoveProductUpvoteDocument = gql`
    mutation removeProductUpvote($id: ID!) {
  removeProductUpvote(id: $id) {
    upvoteCount
    isUpvotedByCurrentUser
  }
}
    `;
export type RemoveProductUpvoteMutationFn = Apollo.MutationFunction<RemoveProductUpvoteMutation, RemoveProductUpvoteMutationVariables>;

/**
 * __useRemoveProductUpvoteMutation__
 *
 * To run a mutation, you first call `useRemoveProductUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductUpvoteMutation, { data, loading, error }] = useRemoveProductUpvoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProductUpvoteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductUpvoteMutation, RemoveProductUpvoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductUpvoteMutation, RemoveProductUpvoteMutationVariables>(RemoveProductUpvoteDocument, options);
      }
export type RemoveProductUpvoteMutationHookResult = ReturnType<typeof useRemoveProductUpvoteMutation>;
export type RemoveProductUpvoteMutationResult = Apollo.MutationResult<RemoveProductUpvoteMutation>;
export type RemoveProductUpvoteMutationOptions = Apollo.BaseMutationOptions<RemoveProductUpvoteMutation, RemoveProductUpvoteMutationVariables>;
export const UpvoteProductDocument = gql`
    mutation upvoteProduct($id: ID!) {
  upvoteProduct(id: $id) {
    upvoteCount
    isUpvotedByCurrentUser
  }
}
    `;
export type UpvoteProductMutationFn = Apollo.MutationFunction<UpvoteProductMutation, UpvoteProductMutationVariables>;

/**
 * __useUpvoteProductMutation__
 *
 * To run a mutation, you first call `useUpvoteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpvoteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upvoteProductMutation, { data, loading, error }] = useUpvoteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpvoteProductMutation(baseOptions?: Apollo.MutationHookOptions<UpvoteProductMutation, UpvoteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpvoteProductMutation, UpvoteProductMutationVariables>(UpvoteProductDocument, options);
      }
export type UpvoteProductMutationHookResult = ReturnType<typeof useUpvoteProductMutation>;
export type UpvoteProductMutationResult = Apollo.MutationResult<UpvoteProductMutation>;
export type UpvoteProductMutationOptions = Apollo.BaseMutationOptions<UpvoteProductMutation, UpvoteProductMutationVariables>;