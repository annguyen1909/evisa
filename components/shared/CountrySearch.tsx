"use client";

import * as React from "react";
import { Combobox } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { COUNTRIES_DATA } from "@/lib/constants";

interface CountrySearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function CountrySearch({ value, onChange, placeholder }: CountrySearchProps) {
  const [query, setQuery] = React.useState(value);

  // Filter countries by query
  const filteredCountries =
    query === ""
      ? COUNTRIES_DATA
      : COUNTRIES_DATA.filter((country) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox
      value={query}
      onChange={(value: string | null) => setQuery(value ?? "")}
    >
      <div className="relative w-full">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          displayValue={(country: string) => country}
          onChange={(event) => {
            setQuery(event.target.value);
            onChange(event);
          }}
          placeholder={placeholder || "Select a country"}
        />
        {filteredCountries.length > 0 && query !== "" && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCountries.map((country) => (
              <Combobox.Option
                key={country.code}
                value={country.name}
                className={({ active }) =>
                  cn(
                    "relative cursor-pointer select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ selected, active }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-semibold" : ""}`}>
                      {country.name}
                    </span>
                    {selected && (
                      <span
                        className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                          active ? "text-white" : "text-indigo-600"
                        }`}
                      >
                        ✓
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
