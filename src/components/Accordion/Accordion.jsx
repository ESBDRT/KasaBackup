import './Accordion.css'
import React, { useState } from 'react';

function Accordion({ title, content }) {
    const [active, setActive] = useState(false)
  
    const handleToggle = e => {
      setActive(!active)
    }
    return (
      <div className={`Accordions ${active && "active"}`}>
        <div className="Accordion-title" onClick={handleToggle}>
          {title} <span className="Accordion-icon"></span>
        </div>
        <div className="Accordion-content">{content}</div>
      </div>
    )
  }

export default Accordion;