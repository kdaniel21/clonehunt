import { createContext, ReactNode } from 'react'
import { CurrentUserQuery, useCurrentUserQuery } from '../../generated/graphql'

type UserContextData = { user?: CurrentUserQuery['currentUser']; isLoading: boolean; refetchUser: () => Promise<any> }
const UserContext = createContext<UserContextData>({
  user: undefined,
  isLoading: false,
  refetchUser: () => new Promise((resolve) => resolve),
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  let { data, loading: isLoading, error, refetch } = useCurrentUserQuery({ context: { skipOnError: true } })

  const refetchUser = () => refetch()
  const user = error ? undefined : data?.currentUser

  return <UserContext.Provider value={{ user, isLoading, refetchUser }}>{children}</UserContext.Provider>
}

export const UserConsumer = UserContext.Consumer
export default UserContext
