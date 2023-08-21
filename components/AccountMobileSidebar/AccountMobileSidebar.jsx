"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { PiMapPinLight } from "react-icons/pi";
import { BsShield } from "react-icons/bs";
import { HiCheck, HiChevronUpDown } from "react-icons/hi";
import { PiCaretUpDownLight } from "react-icons/pi";
import Link from "next/link";

const AccountMobileSidebar = ({ dashboardNavLink }) => {
  const [selected, setSelected] = useState(dashboardNavLink[0]);

  return (
    <div className="w-full mb-3">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white 
          py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 
          focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
          focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{selected.navText}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <PiCaretUpDownLight
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 z-[10] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {dashboardNavLink.map((navLink, index) => (
                <Link key={index} href={navLink.navLink}>
                  <Listbox.Option
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-[#fff3f3] text-brandColor01"
                          : "text-gray-900"
                      }`
                    }
                    value={navLink}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {navLink.navText}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brandColor01">
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default AccountMobileSidebar;
