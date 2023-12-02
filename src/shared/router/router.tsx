import { createBrowserRouter } from 'react-router-dom'
import MAIN_ROUTE from '~/shared/router/paths'
import { MainPage } from '~/pages'

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
])

export default router
