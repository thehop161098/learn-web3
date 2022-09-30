import { lazy, ReactNode } from 'react'

const Home = lazy(() => import('component/Home'))
const Demo = lazy(() => import('component/Demo'))

interface IRouteItem {
  name: string
  element: ReactNode
  path: string
}

interface IRoutes {
  public: IRouteItem[]
  private: IRouteItem[]
}

export const ROUTES = {
  HOME: '/',
  DEMO: '/demo'
}

export const routes: IRoutes = {
  public: [
    {
      name: 'Home',
      path: ROUTES.HOME,
      element: <Home />
    }
  ],
  private: [
    {
      name: 'Demo',
      path: ROUTES.DEMO,
      element: <Demo />
    }
  ]
}
