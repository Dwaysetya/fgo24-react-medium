import React from "react";

function Input({ id, type = "text", label, value, ...props }) {
  const baseInputStyle =
    "w-[384px] h-[34px] rounded-full py-[15px] px-[24px] bg-white border border-black hover:border-orange-500";
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        className={baseInputStyle}
        value={value}
        {...props}
      />
    </div>
  );
}

export default Input;
