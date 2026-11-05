
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing_page'
import GPACalculator from './GPA_Calc'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<GPACalculator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
