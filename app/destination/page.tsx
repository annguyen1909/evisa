// app/destination/page.tsx

import Link from 'next/link';
import { COUNTRIES } from '@/lib/countries';

export default function DestinationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
      <ul className="grid gap-4">
        {COUNTRIES.map((country) => (
          <li key={country.slug} className="border p-4 rounded shadow-sm hover:shadow-md transition">
            <Link href={`/destination/${country.slug}`}>
              <div>
                <h2 className="text-xl font-semibold">{country.name}</h2>
                <p className="text-gray-600 mt-1 line-clamp-2">{country.welcomeMessage.slice(0, 100)}...</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
