import { Navigate, Route, Routes } from 'react-router-dom'

import { initPosthog } from '@/lib/posthog'
import SiikliCookieConsent from '../components/SiikliCookieConsent'
import ErrorPage from './components/ErrorPage'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/Contact'
import Cookies from './pages/Cookies'
import LandingPage from './pages/Landing'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Support from './pages/Support'
import TermsOfService from './pages/TermsOfService'
import { useEffect } from 'react'

function Landing() {

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      initPosthog()
    }
  }, [])

  const handleCookieConsentAccept = () => {
    initPosthog()
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tietoa-meista" element={<AboutUs />} />
        <Route path="/yhteystiedot" element={<ContactPage />} />
        <Route path="/tietosuoja" element={<PrivacyPolicy />} />
        <Route path="/kayttoehdot" element={<TermsOfService />} />
        <Route path="/evasteet" element={<Cookies />} />
        <Route path="/tuki" element={<Support />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiikliCookieConsent onAccept={handleCookieConsentAccept} />
    </>
  )
}

export default Landing
