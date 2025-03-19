'use client';
import React, { ChangeEvent } from 'react';
import { Input } from '@nextui-org/react';
import InputField from './InputField';

interface SearchInputProps {
  value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  ariaLabel: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  ariaLabel
}) => {
  return (


    <div className="relative w-full group flex flex-col justify-center items-center mb-8">
        <div className="absolute inset-y-0 start-0 left-[-34px] flex items-center ps-3 pointer-events-none">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm outline-none placeholder-gray-600 border bg-none border-black rounded-lg dark:bg-black   dark:text-white dark:focus:border-white" placeholder={placeholder}        value={value}
        onChange={onChange}
          />
    </div>
  );
};

export default SearchInput;
