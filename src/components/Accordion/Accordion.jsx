import './Accordion.css'
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

function Accordion({ title, content }) {
    const [active, setActive] = useState(false)
  
    const handleToggle = e => {
      setActive(!active)
    }
    return (
      <div className={`Accordions ${active && "active"}`}>
        <div className="Accordion-title" onClick={handleToggle}>
          {title}
          <IoIosArrowUp className={`Accordion-icon ${active && 'rotate'}`} />
        </div>
        <div className="Accordion-content">{content}</div>
      </div>
    )
  }

export default Accordion;