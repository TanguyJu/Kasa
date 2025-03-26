import { useState } from "react";
import "../styles/collapse.scss";


export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="collapse">
        <div className="collapse-header" onClick={toggleCollapse}>
          <span>{title}</span>
          <svg
            className={isOpen ? "chevron open" : "chevron"}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="white" d="M12 15.5L5 8.5l1.4-1.4 5.6 5.6 5.6-5.6L19 8.5z" />
          </svg>
        </div>
        <div className={`collapse-content ${isOpen ? "open" : ""}`}>
          <div className="collapse-text">{children}</div>
        </div>
      </div>
    );
  }