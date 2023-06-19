import { InputTypes, SelectTypes } from "../../types/types"
import React from "react"

export function InputBox({
  label,
  placeholder = "",
  className,
  type,
  name,
  initialValue,
  handleChange,
  statusCompleted,
  value,
}: InputTypes) {
  return (
    <div className=" flex flex-col ">
      <label className="">
        <span className="font-[250] text-sm">{label}</span>
      </label>
      <input
        className={`
               border-b py-2 px-4 
                ${statusCompleted ? "" : ""}  `}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={true}
      />
    </div>
  )
}

export function StaticBox({
  label,
  placeholder = "",
  className,
  type,
  name,
  initialValue,

  statusCompleted,
  value,
}: any) {
  return (
    <div className=" flex flex-col ">
      <label className="">
        <span className="font-[250] text-sm">{label}</span>
      </label>
      <input
        className={`
               border-b py-2 px-4 
                ${statusCompleted ? "" : ""}  `}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={true}
        readOnly={true}
      />
    </div>
  )
}

export function LargeInputBox({
  label,
  placeholder = "",
  className,
  type,
  name,
  value,
  handleChange,
  statusCompleted,
}: InputTypes) {
  return (
    <div className=" flex flex-col ">
      <label className="">
        <span className="font-[250] text-sm ">{label}</span>
      </label>
      <textarea
        className={`mt-3
               border py-2 px-4 rounded-xl shadow-md}
                ${statusCompleted ? "" : ""}  `}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        required={true}
        rows={4}
        value={value}
      />
    </div>
  )
}

export function LargeStaticBox({
  label,
  placeholder = "",
  className,
  type,
  name,
  value,

  statusCompleted,
}: any) {
  return (
    <div className=" flex flex-col ">
      <label className="">
        <span className="font-[250] text-sm ">{label}</span>
      </label>
      <textarea
        className={`mt-3
               border py-2 px-4 rounded-xl shadow-md}
                ${statusCompleted ? "" : ""}  `}
        name={name}
        placeholder={placeholder}
        readOnly={true}
        required={true}
        rows={7}
        value={value}
      />
    </div>
  )
}

export function SelectBox({
  label,
  name,
  placeholder,
  handleChange,
  options,
  statusCompleted,
}: SelectTypes) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        name={name}
        defaultValue=""
        required
        onInput={handleChange}
        className={`select ${
          statusCompleted ? "select-success" : "select-warning"
        }`}
      >
        <option disabled value="">
          Choose One
        </option>

        {options.map((op, index) => (
          <option key={index} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  )
}
