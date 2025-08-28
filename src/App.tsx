import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Landing = lazy(() => import('./landing/index'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/*" element={<Landing />} />
      </Routes>
    </Suspense>
  )
}
