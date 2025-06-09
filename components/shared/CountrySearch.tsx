"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { COUNTRIES_DATA } from "@/lib/constants"

interface CountrySearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function CountrySearch({
  value,
  onChange,
  placeholder = "Select a country...",
}: CountrySearchProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  const filteredCountries = COUNTRIES_DATA.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[470px] max-md:w-[270px] justify-between"
        >
          {value
            ? COUNTRIES_DATA.find((c) => c.name === value)?.name
            : placeholder}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[470px] max-md:w-[270px] p-0">
        <Command>
          <CommandInput
            placeholder="Search country..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {filteredCountries.map((country) => {
                const matchIndex = country.name
                  .toLowerCase()
                  .indexOf(query.toLowerCase())

                const beforeMatch = country.name.slice(0, matchIndex)
                const matchText = country.name.slice(
                  matchIndex,
                  matchIndex + query.length
                )
                const afterMatch = country.name.slice(matchIndex + query.length)

                return (
                  <CommandItem
                    key={country.code}
                    value={country.name}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue)
                      setQuery("")
                      requestAnimationFrame(() => setOpen(false))
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === country.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span>
                      {matchIndex >= 0 ? (
                        <>
                          {beforeMatch}
                          <span className="font-medium text-blue-500">{matchText}</span>
                          {afterMatch}
                        </>
                      ) : (
                        country.name
                      )}
                    </span>
                  </CommandItem>
                )
              })}

            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
