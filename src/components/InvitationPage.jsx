import './InvitationPage.css'

const PLACE_NAME = 'Rockwell Powerplant Mall'
const PLACE_ADDRESS = 'H27P+VH3, Rockwell Dr, Makati City, 12242 Metro Manila'
const PLACE_MAPS_URL = '#' // Optional: add Google Maps link
const DATE_TIME = 'Saturday, February 14th · 7:30 PM'

export default function InvitationPage() {
  return (
    <div className="invitation-page">
      <div className="invitation-hearts" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="invitation-heart"
            style={{ '--ii': i }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="invitation-card">
        <div className="invitation-card-inner">
          <div className="invitation-header">
            <span className="invitation-label">You said yes ♥</span>
            <h1 className="invitation-title">You&apos;re invited</h1>
            <p className="invitation-subtitle">Valentine&apos;s date with me</p>
            <span className="invitation-badge">Save the date</span>
          </div>

          <div className="invitation-details">
            <div className="detail-row">
              <span className="detail-icon" aria-hidden="true">📍</span>
              <div>
                <span className="detail-label">Where</span>
                <p className="detail-value">{PLACE_NAME}</p>
                <p className="detail-address">{PLACE_ADDRESS}</p>
                {PLACE_MAPS_URL !== '#' && (
                  <a
                    href={PLACE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    Get directions →
                  </a>
                )}
              </div>
            </div>

            <div className="detail-row">
              <span className="detail-icon" aria-hidden="true">📅</span>
              <div>
                <span className="detail-label">When</span>
                <p className="detail-value">{DATE_TIME}</p>
              </div>
            </div>

            <div className="detail-row">
              <span className="detail-icon" aria-hidden="true">✨</span>
              <div>
                <span className="detail-label">What to expect</span>
                <p className="detail-value">Dinner, good vibes & you</p>
              </div>
            </div>
          </div>

          <p className="invitation-footer">Together on the 14th — let&apos;s make it special. ♥</p>
        </div>
      </div>
    </div>
  )
}
