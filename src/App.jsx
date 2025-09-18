import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'dark',
        styles: {
          branding: { brandColor: '#667eea' }
        },
        hideEventTypeDetails: false
      })
    })()
  }, [])


  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <div className="headshot-container">
            <img
              src="/eva-headshot.jpg"
              alt="Eva - Licensed Massage Therapist"
              className="headshot"
            />
          </div>
          <h1>Evalution Bodywork</h1>
          <h2>Eva Wenham - Licensed Massage Therapist</h2>
          <p className="hero-description">
            Welcome to my solo practice specializing in therapeutic massage and reflexology.
            I provide personalized treatments designed to help you relax, recover, and restore balance to your body and mind.
          </p>
        </div>
      </header>

      <section className="services">
        <div className="container">
          <h3>Services & Pricing</h3>
          <div className="service-grid">
            <div className="service-card massage-card">
              <h4>Massage Therapy</h4>
              <div className="service-types">
                <p><strong>Thai Massage</strong> - Traditional stretching and pressure point techniques</p>
                <p><strong>Deep Tissue Massage</strong> - Target chronic tension and muscle knots</p>
                <p><strong>Medical Massage</strong> - Therapeutic treatment for specific conditions</p>
              </div>
              <div className="pricing">
                <div className="price-item" data-cal-link="evalution-bodywork" data-cal-config='{"layout":"month_view","theme":"dark"}'>
                  <span>1 Hour</span>
                  <span className="price">$80</span>
                </div>
                <div className="price-item" data-cal-link="evalution-bodywork" data-cal-config='{"layout":"month_view","theme":"dark"}'>
                  <span>1.5 Hours</span>
                  <span className="price">$120</span>
                </div>
                <div className="price-item" data-cal-link="evalution-bodywork" data-cal-config='{"layout":"month_view","theme":"dark"}'>
                  <span>2 Hours</span>
                  <span className="price">$150</span>
                </div>
                <p className="medical-note">*Medical massage: +$20/hour</p>
              </div>
            </div>
            <div className="service-card reflexology-card">
              <h4>Reflexology</h4>
              <div className="service-types">
                <p><strong>Therapeutic Foot Massage</strong> - Targeting pressure points that correspond to different areas of the body</p>
                <p><strong>Promotes relaxation</strong> - Reduces stress and tension throughout the body</p>
                <p><strong>Improves circulation</strong> - Enhances blood flow and oxygen delivery</p>
                <p><strong>Supports overall wellness</strong> - Balances energy and promotes natural healing</p>
              </div>
              <div className="pricing">
                <div className="price-item featured" data-cal-link="evalution-bodywork" data-cal-config='{"layout":"month_view","theme":"dark"}'>
                  <span>1 Hour Session</span>
                  <span className="price">$80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="booking">
        <div className="container">
          <h3>Book Your Appointment</h3>
          <p>Schedule your massage therapy session today. Choose from our available time slots below.</p>
          <div className="cal-embed">
            <Cal
              calLink="evalution-bodywork"
              style={{ width: '100%', height: '100vh' }}
              config={{ layout: 'month_view', theme: 'dark' }}
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Evalution Bodywork. Professional massage therapy services.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
