"use client";

import { useState, useEffect } from "react";

interface RightEntry {
  country: string;
  community: string;
  rights: string[];
}

export default function SearchCountry() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<RightEntry[]>([]);

  const communities = ["Women", "LGBTQ+", "Persons with Disabilities", "Migrants"];
  const countries = ["India", "Canada", "Germany", "USA"];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/legislations.json");
      const data: RightEntry[] = await res.json();

      const filtered = data.filter((entry) => {
        const countryMatch = entry.country === selectedCountry;
        const communityMatch =
          selectedCommunities.length === 0 ||
          selectedCommunities.includes(entry.community);
        return countryMatch && communityMatch;
      });

      setFilteredData(filtered);
    };

    fetchData();
  }, [selectedCountry, selectedCommunities]);

  const handleCheckboxChange = (community: string) => {
    setSelectedCommunities((prev) =>
      prev.includes(community)
        ? prev.filter((c) => c !== community)
        : [...prev, community]
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-white">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-20 md:gap-50 mb-10">
        
        {/* Select */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Select Country:
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-[#0F172A] text-white p-2 rounded border border-gray-600 w-64"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">
            Select Communities:
          </label>
          <div className="flex flex-wrap gap-4">
            {communities.map((community) => (
              <label
                key={community}
                className="inline-flex items-center gap-3 py-2"
              >
                <input
                  type="checkbox"
                  checked={selectedCommunities.includes(community)}
                  onChange={() => handleCheckboxChange(community)}
                  className="form-checkbox accent-purple-500 w-5 h-5"
                />
                <span>{community}</span>
              </label>
            ))}
          </div>
        </div>
        
      </div>

      {/* Results */}
      <div className="relative w-full rounded-2xl bg-gray-900/90 p-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-4">Rights & Laws</h1>
        {filteredData.length > 0 ? (
          filteredData.map((entry, idx) => (
            
            <div key={idx} className="mb-6">
              
              <h3 className="text-xl font-semibold mb-1">{entry.community}</h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-300">
                {entry.rights.map((right, i) => (
                  <li key={i}>{right}</li>
                ))}
              </ul>
            
            </div>

          ))
        ) : (
          <p className="text-gray-400">No data found.</p>
        )}
      </div>

    </section>
  );
}
