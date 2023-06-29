"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
interface Props {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
}

const Input: React.FC<Props> = ({
  id,
  errors,
  label,
  register,
  disabled,
  formatPrice,
  type,
  required = false,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`pee w-full p-4 pt-6 font-light bg-white border-2  rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
            ${formatPrice ? "pl-9" : "pl-4"}
            ${
              errors[id]
                ? "border-rose-500 focus:border-rose-500"
                : "border-neutral-300 focus:border-black"
            }
            `}
      />
      <label
        className={`
        absolute text-base duration-150 
        transform -translate-y-3 
        top-5 z-10 origin-[0]
        pee-placeholder-shown:scale-100
        pee-placeholder-shown:translate-y-0
        pee-focus:scale-75
        pee-focus:-translate-y-4
        ${formatPrice ? "left-9" : "left-4"}
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
