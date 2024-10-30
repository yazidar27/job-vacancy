import React from 'react';
import { Navbar, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';

export const CustomNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true} className="bg-white shadow-md dark:bg-blue-900 fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9 px-3" alt="RJ Logo" />
        <span className="self-center whitespace-nowrap text-xl md:text-[32px] font-semibold dark:text-white">
          RushJob
        </span>
      </Navbar.Brand>
      <div className="flex items-center justify-center flex-grow space-x-8">
        <ul className="flex space-x-8 list-none p-0 m-0">
          <li>
            <a href="/home" className="text-lg font-medium text-gray-700 dark:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/vacancy" className="text-lg font-medium text-gray-700 dark:text-white">
              Vacancy
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg font-medium text-gray-700 dark:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Search Feature on the right */}
      <div className="relative flex items-center ml-auto">
        <TextInput
          placeholder="Search..."
          className="pl-4 pr-12 py-4 rounded-full border border-white dark:border-white"
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-5">
          <HiSearch className="text-white dark:text-gray-400" />
        </button>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;