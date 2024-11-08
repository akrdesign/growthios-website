import React, { useEffect } from 'react'

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Clean up the script on unmount
    }
  }, [])
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/dnyaneshingle/real-estate-discovery-call"
      style={{ minWidth: '320px', height: '700px', padding: '0 50px' }}
    ></div>
  )
}

export default CalendlyWidget
