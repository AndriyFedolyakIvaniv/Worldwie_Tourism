import { useState } from 'react'
import triptrav from '../assets/triptrav.svg'

export function BrandLogo() {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return (
      <div className="brand-logo-wrap">
        <div className="brand-logo-caption">TripTrav</div>
      </div>
    )
  }

  return (
    <div className="brand-logo-wrap">
      <img
        src={triptrav}
        alt="TripTrav logo"
        className="brand-logo"
        onError={() => setVisible(false)}
      />
      <div className="brand-logo-caption">TripTrav</div>
    </div>
  )
}

export default BrandLogo
