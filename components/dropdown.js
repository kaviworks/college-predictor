import React, { useId } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    borderColor: "rgba(209, 213, 219)",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "&:hover": {
      borderColor: "#05ac4c",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "0.5rem 1rem",
    color: state.isSelected ? "white" : "rgba(55, 65, 81)",
    backgroundColor: state.isFocused
      ? "rgba(5, 172, 76, 0.2)" // Light green on hover
      : state.isSelected
      ? "#05ac4c" // Selected option background
      : "white",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#05ac4c",
  }),
};

const Dropdown = ({
  options,
  onChange,
  isDisabled,
  selectedValue,
  className,
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      isDisabled={isDisabled}
      styles={customStyles}
      instanceId={useId()}
      className={className}
      value={options.find(
        (option) =>
          option.label === selectedValue || option.value === selectedValue
      )}
    />
  );
};

export default Dropdown;
