import { ChakraUiProvider } from '~/app/providers'
import { RouterProvider } from 'react-router-dom'
import router from '~/shared/router/router'

function App() {
  return (
    <ChakraUiProvider>
      <RouterProvider router={router} />
    </ChakraUiProvider>
  )
}

export default App
