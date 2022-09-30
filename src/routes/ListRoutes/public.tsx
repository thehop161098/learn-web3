import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import PageNotFound from 'component/PageNotFound'
import { ROUTES, routes } from '..'

const PublicListRoutes = (isAuth?: string) => {
  return (
    <Route>
      <Route>
        {routes.public.map((route, index) => (
          <Route path={route.path} key={`${route.name}_${index}`} element={<div>{route.element}</div>} />
        ))}
      </Route>

      <Route path='/login' element={<>{isAuth ? <Navigate to={ROUTES.HOME} replace /> : <div>Login page</div>}</>} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
}

export { PublicListRoutes }
