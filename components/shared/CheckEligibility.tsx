"use client";

import * as React from "react";
import { Check, ChevronsDown } from "lucide-react";
import { COUNTRIES } from '@/lib/countries';
import { NATIONALITIES } from '@/lib/nationalities';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation"; // ✅


// Transform countries into ComboBox format
const countryOptions = COUNTRIES.map((country) => ({
  value: country.code.toLowerCase(),
  label: country.name,
}));

const nationalityOptions = NATIONALITIES.map((n) => ({
  value: n.code.toLowerCase(),
  label: n.name,
}));

// Reusable ComboBox component
function ComboBox({
  label,
  options,
  value,
  onChange,
  placeholder,
  variant,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "left" | "right";
}) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((opt) => opt.value === value);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const variantClasses =
    variant === "left"
      ? "rounded-l-md rounded-r-none max-md:rounded-md"
      : variant === "right"
        ? "rounded-none max-md:rounded-md"
        : "rounded-md";

  return (
    <div className="w-full md:w-64">
      <label className="block mb-1 font-medium text-md">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full p-6 text-black justify-between", variantClasses)}
          >
            {selected ? selected.label : placeholder || `Select ${label.toLowerCase()}...`}
            <ChevronsDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput
              placeholder={`Search ${label.toLowerCase()}...`}
              onFocus={() => inputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })}
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.label.toLowerCase()}
                    onSelect={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === opt.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Main component
export default function CheckEligibility() {
  const [nationality, setNationality] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const router = useRouter();

  const onCheck = async () => {
    console.log("=== Starting Check ===");
    console.log("Selected Nationality (slug):", nationality);
    console.log("Selected Destination (slug):", destination);
    if (!nationality || !destination) {
      alert("Please select both nationality and destination.");
      return;
    }
    const destinationCountry = COUNTRIES.find(
      (c) => c.code.toLowerCase() === destination
    );

    if (!destinationCountry) {
      alert("Destination country not found.");
      return;
    }

    const destinationSlug = destinationCountry.slug;

    try {
      // Import the selected destination's data file (e.g., "@/lib/countries/vietnam.ts")
      const destinationModule = await import(`@/lib/countries/${destinationSlug}`);
      const allowedNationalities: string[] = destinationModule.default.etaInfo.visaTypes.map((visaType: any) => visaType.allowedNationalities);

      // Find the nationality's name (e.g., 'Vietnam' from 'vn')
      const nationalityName = nationalityOptions.find(
        (n) => n.value === nationality.toLowerCase()
      )?.label;

      if (!nationalityName) {
        alert("Could not find nationality name.");
        return;
      }

      const isEligible = allowedNationalities.includes(nationality.toUpperCase());

      if (isEligible) {
        router.push(`/check-requirements?n=${nationality}&d=${destination}`);
      } else {
        router.push(`/check-requirements?n=${nationality}&d=${destination}`);
      }
    } catch (error) {
      console.error("Failed to load destination data:", error);
      alert("An error occurred while checking eligibility.");
    }
  };


  return (
    <section className="w-full max-w-4xl mx-auto pt-0 px-4 max-md:px-0">
      <h2 className="text-2xl font-semibold mb-6 text-center">Check Your Visa Eligibility</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await onCheck();
        }}
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 gap-0 w-full">
          <ComboBox
            label="Your Nationality"
            options={nationalityOptions}
            value={nationality}
            onChange={setNationality}
            placeholder="Select nationality"
            variant="left"
          />
          <ComboBox
            label="Your Destination"
            options={countryOptions}
            value={destination}
            onChange={setDestination}
            placeholder="Select destination"
            variant="right"
          />
          <Button
            type="submit"
            className="bg-[#16610E] p-6.25 w-full rounded-r-md rounded-l-none md:w-auto mt-7 max-md:rounded-md max-md:w-1/2"
          >
            Check Now
          </Button>
        </div>
      </form>
    </section>
  );
}
