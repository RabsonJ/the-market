import { QueryClient, QueryClientProvider } from 'react-query'
import AppNavigationContainer from '~navigation'
// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigationContainer />
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  )
}
