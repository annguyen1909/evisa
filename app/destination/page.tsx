'use client'
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { X, Search, Globe2 } from "lucide-react"; // Example icons
import { cn } from "@/lib/utils";
import { COUNTRIES } from "@/lib/countries";


const ITEMS_PER_PAGE = 8;
const regions = Array.from(new Set(COUNTRIES.map((c) => c.region).filter(Boolean))).sort();

export default function DestinationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [countryQuery, setCountryQuery] = useState("");
  const [region, setRegion] = useState("");
  const [page, setPage] = useState(initialPage);

  // Filtered countries
  const filteredCountries = useMemo(() => {
    let list = COUNTRIES;
    if (region) list = list.filter((c) => c.region === region);
    if (countryQuery)
      list = list.filter((c) =>
        c.name.toLowerCase().includes(countryQuery.toLowerCase())
      );
    return list;
  }, [countryQuery, region]);

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const paginatedCountries = filteredCountries.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
    setPage(newPage);
  };

  // Reset to page 1 when filter/search changes
  useEffect(() => {
    setPage(1);
    router.push("?page=1");
  }, [countryQuery, region]);

  // --- Combobox for Country ---
  const [openCountry, setOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // --- Combobox for Region ---
  const [openRegion, setOpenRegion] = useState(false);

  return (
    <section className="w-full max-w-6xl mx-auto pt-12 pb-4 px-4">
      <h2 className="text-2xl font-manrope sm:text-3xl text-[#16610E] font-bold mb-4 text-center">
        All Destinations
      </h2>
      <h2 className="text-2xl font-manrope sm:text-2xl text-gray-600 font-semibold mb-8 text-center">
        Start your trips by applying for a Visa with UnitedEvisa assistance

      </h2>
      {/* Search and Region Filter */}
      <div className="flex flex-col justify-center sm:flex-row gap-4 mb-8">
        {/* Country Search Combobox */}
        <Popover open={openCountry} onOpenChange={setOpenCountry}>
          <PopoverTrigger asChild>
            <button
              className="w-full sm:w-[350px] px-4 py-2 border border-gray-200 rounded-xl text-left bg-white shadow-md flex items-center gap-2 transition focus:ring-2 focus:ring-[#16610E]/30"
            >
              <Search className="w-5 h-5 text-gray-400" />
              <span className={selectedCountry ? "text-gray-900" : "text-gray-400"}>
                {selectedCountry || "Search country..."}
              </span>
              {countryQuery && (
                <X
                  className="ml-auto w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={e => {
                    e.stopPropagation();
                    setCountryQuery("");
                    setSelectedCountry(null);
                  }}
                />
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-full sm:w-[350px] p-0 rounded-xl shadow-lg animate-in fade-in slide-in-from-top-2">
            <Command>
              <CommandInput
                placeholder="Type a country..."
                value={countryQuery}
                onValueChange={v => {
                  setCountryQuery(v);
                  setSelectedCountry(null);
                }}
                className="px-4 py-2 font-manrope"
              />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {COUNTRIES
                    .filter((c) =>
                      c.name.toLowerCase().includes(countryQuery.toLowerCase())
                    )
                    .map((c) => (
                      <CommandItem
                        key={c.slug}
                        value={c.name}
                        onSelect={() => {
                          setCountryQuery(c.name);
                          setSelectedCountry(c.name);
                          setOpenCountry(false);
                        }}
                        className={cn(
                          "px-4 py-2 rounded-lg cursor-pointer transition-colors",
                          selectedCountry === c.name
                            ? "bg-[#16610E]/10 text-[#16610E] font-semibold"
                            : "hover:bg-[#16610E]/5"
                        )}
                      >
                        {c.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {/* Region Filter Combobox */}
        <Popover open={openRegion} onOpenChange={setOpenRegion}>
          <PopoverTrigger asChild>
            <button
              className="w-full whitespace-nowrap sm:w-48 px-4 py-2 border border-gray-200 rounded-xl text-left bg-white shadow-md flex items-center gap-2 transition focus:ring-2 focus:ring-[#16610E]/30"
            >
              <Globe2 className="w-5 h-5 text-gray-400" />
              <span className={region ? "text-gray-900" : "text-gray-400"}>
                {region || "Region"}
              </span>
              {region && (
                <X
                  className="ml-auto w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={e => {
                    e.stopPropagation();
                    setRegion("");
                  }}
                />
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-full sm:w-48 p-0 rounded-xl shadow-lg animate-in fade-in slide-in-from-top-2">
            <Command>
              <CommandInput
                placeholder="Type a region..."
                value={region}
                onValueChange={setRegion}
                className="px-4 py-2 font-manrope"
              />
              <CommandList className="p-2">
                <CommandItem
                  key="all"
                  value=""
                  onSelect={() => {
                    setRegion("");
                    setOpenRegion(false);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-lg cursor-pointer transition-colors",
                    !region
                      ? "bg-[#16610E]/10 text-[#16610E] font-semibold"
                      : "hover:bg-[#16610E]/5"
                  )}
                >
                  All Regions
                </CommandItem>
                <CommandGroup>
                  {regions.map((r) => (
                    <CommandItem
                      key={r}
                      value={r}
                      onSelect={() => {
                        setRegion(r ?? "");
                        setOpenRegion(false);
                      }}
                      className={cn(
                        "px-4 py-2 rounded-lg cursor-pointer transition-colors",
                        region === r
                          ? "data-[selected=true]:bg-[#16610E]/10 data-[selected=true]:text-[#16610E] font-semibold"
                          : "data-[selected=true]:hover:bg-[#16610E]/5"
                      )}
                    >
                      {r}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {/* Country Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedCountries.map((country) => (
          <Card
            key={country.slug}
            className="cursor-pointer overflow-hidden pt-0 pb-4 rounded-xl hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/destination/${country.slug}${page > 1 ? `?page=${page}` : ""}`}>
              <Image
                src={`${country.imageUrl}`}
                alt={`${country.name} flag`}
                width={500}
                height={300}
                className="w-full object-cover h-36 max-md:h-72"
              />
              <CardHeader className="text-center">
                <CardTitle className="text-md uppercase mt-4">{country.name}</CardTitle>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => handlePageChange(idx + 1)}
            className={`w-9 h-9 rounded-full font-semibold border border-gray-300 flex items-center justify-center transition
              ${page === idx + 1
                ? "bg-[#16610E] text-white border-[#16610E]"
                : "bg-white text-[#16610E] hover:bg-[#16610E]/10"}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}