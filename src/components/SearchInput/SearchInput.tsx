import React from "react";

interface PropsInputField {
  placeholder?: string;
}

const SearchInput: React.FC<PropsInputField> = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="rounded-md p-2 w-full"
      placeholder="Pencarian"
    />
  );
};

export default SearchInput;
