import { useNavigate } from 'react-router-dom'
import './landing_page.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <h1>GPA Calculator</h1>

      <p>Winthrop GPA Point Scale</p>

      <button onClick={() => window.location.href = '/calculator'}>
        Get Started
      </button>
    </div>
  )
}

export default LandingPage
