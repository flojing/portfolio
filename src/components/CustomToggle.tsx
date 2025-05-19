import { useEffect, useState } from "react";
import "../styles/CustomToggle.css";

// Icônes SVG inline
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#07BAE5"
    stroke="#07BAE5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#07BAE5"
    stroke="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    role="img"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

interface CustomToggleProps {
  onChange?: (checked: boolean) => void;
  initialState?: boolean;
}

export default function CustomToggle({
  onChange = () => {},
  initialState = false,
}: CustomToggleProps) {
  const [isChecked, setIsChecked] = useState(initialState);

  useEffect(() => {
    setIsChecked(initialState);
  }, [initialState]);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onChange(newState);
  };

  return (
    <div
      className={`custom-toggle ${isChecked ? "checked" : ""}`}
      onClick={handleToggle}
      onKeyDown={handleToggle}
      role="switch"
      aria-checked={isChecked}
      tabIndex={0}
    >
      <div className="toggle-track">
        <div className="moon-icon">
          <MoonIcon />
        </div>
        <div className="toggle-handle"> </div>
        <div className="sun-icon">
          <SunIcon />
        </div>
      </div>
    </div>
  );
}
