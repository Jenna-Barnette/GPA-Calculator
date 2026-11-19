import { useNavigate } from 'react-router-dom'
import './landing_page.css'
import winthropLogo from './assets/winthrop-logo.png'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <main className="landing-card">
        <img
          className="winthrop-logo"
          src={winthropLogo}
          alt="Winthrop University"
        />
        <div className="landing-divider" />
        <h1>GPA Calculator</h1>
        <p>Calculate your Winthrop University GPA using the official grade point scale.</p>
        <button type="button" onClick={() => navigate('/calculator')}>
          Get Started
        </button>
      </main>
    </div>
  )
}

export default LandingPage
