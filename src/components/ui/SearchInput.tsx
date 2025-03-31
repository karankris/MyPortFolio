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
      <div className=" flex items-center py-1 border-secondary  peer-focus:bg-card p-2  peer box-border h-12 w-full rounded-lg border px-2 text-sm placeholder-transparent bg-none  outline-none hover:border-secondary-foreground focus:border-secondary-foreground font-medium text-black dark:text:white border-black dark:border-white">
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
        <input type="search" id="default-search" className="w-full p ps-2 text-sm outline-none placeholder-gray-600  bg-none rounded-lg dark:focus:border-white text-dark dark:text-white" placeholder={placeholder} value={value}
          onChange={onChange}
        />
      </div>
    </div>

  );
};

export default SearchInput;
