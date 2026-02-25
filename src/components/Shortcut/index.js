import React from "react";

// Styles
import "./index.scss";

// Context
import { State } from "../Layout";

const Shortcut = ({ text }) => {
  const { setModalIsOpened } = React.useContext(State);
  const [isMobile, setIsMobile] = React.useState(true);
  const [isMac, setIsMac] = React.useState(false);
  const tapRef = React.useRef(null);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.platform));
  }, []);

  // Native event listener — guaranteed to work after hydration
  React.useEffect(() => {
    if (!isMobile || !tapRef.current) return;
    const el = tapRef.current;
    const handleTap = () => setModalIsOpened(true);
    el.addEventListener('click', handleTap);
    return () => el.removeEventListener('click', handleTap);
  }, [isMobile, setModalIsOpened]);

  return isMobile ? (
    <button ref={tapRef} className="shortcut" type="button" aria-label="Open menu">
      <span className="key text-[var(--tw-text-gray-primary)] bg-[var(--bg-secondary)]">tap</span>
      <span>to start</span>
    </button>
  ) : (
    <div className="shortcut">
      <p className="key text-[var(--tw-text-gray-primary)] bg-[var(--bg-secondary)]">{isMac ? "command" : "ctrl"}</p>
      <p className="text-[var(--tw-text-gray-secondary)]">+</p>
      <p className="key text-[var(--tw-text-gray-primary)] bg-[var(--bg-secondary)]">{isMac ? "return" : "enter"}</p>
      <p className="text-[var(--tw-text-gray-primary)]">{text}</p>
    </div>
  );
};

export default Shortcut;
