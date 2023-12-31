import React from "react";

type InputProps = {
  onChange: (event: string) => void;
  value: string;
  type: string;
  placeholder: string;
  label: string;
  id: string;
};

export default function Input({
  onChange,
  value,
  type,
  placeholder,
  label,
  id,
}: InputProps) {
  return (
    <div className="relative mb-6">
      <input
        onChange={(event) => onChange(event.target.value)}
        type={type}
        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={id}
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className={`${
          value
            ? "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 -translate-y-[1.75rem] scale-[0.8] text-primary"
            : "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.75rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
