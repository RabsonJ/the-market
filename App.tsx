import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import AppNavigationContainer from './src/navigation'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigationContainer />
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  )
}
