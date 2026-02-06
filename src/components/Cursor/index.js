import React, { useEffect } from "react";

import classnames from "classnames";

// Styles
import "./index.scss";

const Cursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const $outline = document.querySelector(".ppk-dot-outline");
    if (!$outline) return;

    const delay = 8;
    let _x = 0;
    let _y = 0;
    let endX = window.innerWidth / 2;
    let endY = window.innerHeight / 2;
    let cursorVisible = true;
    let cursorEnlarged = false;
    let animationId = null;

    const outlineSize = $outline.offsetWidth;

    const toggleCursorSize = () => {
      if (cursorEnlarged) {
        $outline.style.transform = "translate(-50%, -50%) scale(2)";
        $outline.style.borderColor = "white";
      } else {
        $outline.style.transform = "translate(-50%, -50%) scale(1)";
        $outline.style.borderColor = "var(--cursor-bg)";
      }
    };

    const toggleCursorVisibility = () => {
      $outline.style.opacity = cursorVisible ? 1 : 0;
    };

    const animateDotOutline = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;
      $outline.style.top = _y + "px";
      $outline.style.left = _x + "px";
      animationId = requestAnimationFrame(animateDotOutline);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        cursorEnlarged = true;
        toggleCursorSize();
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        cursorEnlarged = false;
        toggleCursorSize();
      }
    };
    const handleMouseDown = () => { cursorEnlarged = true; toggleCursorSize(); };
    const handleMouseUp = () => { cursorEnlarged = false; toggleCursorSize(); };
    const handleMouseMove = (e) => {
      cursorVisible = true;
      toggleCursorVisibility();
      endX = e.clientX;
      endY = e.clientY;
    };
    const handleMouseEnter = () => { cursorVisible = true; toggleCursorVisibility(); $outline.style.opacity = 1; };
    const handleMouseLeave = () => { cursorVisible = false; toggleCursorVisibility(); $outline.style.opacity = 0; };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(animateDotOutline);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={classnames("cursor")}>
      <div className="ppk-dot-outline"></div>
    </div>
  );
};

export default Cursor;
