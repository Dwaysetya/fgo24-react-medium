import React from "react";

/**
 * Customizable Chip component
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Text/content inside the chip
 * @param {string} [props.className] - Custom class for outer div
 * @param {string} [props.textClassName] - Custom class for text
 * @returns JSX.Element
 */
function Chip({ children, className, textClassName }) {
  const baseStyle =
    className || "flex rounded-full py-[5px] px-[24px] border-1";
  const baseTextStyle = textClassName || "text-black font-thin";

  return (
    <div className={baseStyle}>
      <p className={baseTextStyle}>{children}</p>
    </div>
  );
}

export default Chip;
