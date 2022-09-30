import React, { Suspense, useEffect } from 'react'
import './App.scss'
import './polyfill'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from 'routes/ProtectedRoutes'
import { PublicListRoutes } from 'routes/ListRoutes/public'
import { PrivateListRoutes } from 'routes/ListRoutes/protected'
import { useAppDispatch } from 'hooks/reduxHooks'
import { initWeb3 } from 'component/Web3/web3Slice'

const isAuth = 's'

function App(): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initWeb3())
  }, [dispatch])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* _________________ PROTECTED ROUTES _________________ */}
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>{PrivateListRoutes()}</Route>

        {/* _________________ PUBLIC ROUTES _________________ */}
        <Route>{PublicListRoutes(isAuth)}</Route>
      </Routes>
    </Suspense>
  )
}

export default App
