"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

interface Act {
  act: string;
  description: string;
  link: string;
}

interface CommunityData {
  community: string;
  acts: Act[];
}

interface CountryData {
  country: string;
  data: CommunityData[];
}

export default function SearchCountry() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<CommunityData[]>([]);

  const communities = ["Women", "LGBTQ+", "Persons with Disabilities"];
  const countries = ["India", "United States of America"];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/legislations.json");
      const rawData: CountryData[] = await res.json();

      const countryEntry = rawData.find(
        (entry) => entry.country === selectedCountry
      );

      if (!countryEntry) {
        setFilteredData([]);
        return;
      }

      const relevantCommunities =
        selectedCommunities.length > 0 ? selectedCommunities : communities;

      const filtered = countryEntry.data.filter((entry) =>
        relevantCommunities.includes(entry.community)
      );

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
        {/* Select Country */}
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

        {/* Select Communities */}
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

      <h1 className="text-3xl font-bold mb-4">Related Laws & Legislations</h1>
      {/* Results */}
      <div className="max-w-5xl relative w-full rounded-2xl bg-gray-900/90 p-6 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
        {filteredData.length > 0 ? (
          filteredData.map((entry, idx) => (
            <div key={idx} className="mb-10">
              <div className="flex items-center text-lg font-semibold mb-2">
                <Sparkles className="w-6 h-5 text-fuchsia-400 mb-3 mr-2" />
                <h3 className="text-2xl font-semibold mb-3">{entry.community}</h3>
              </div>
              <div className="space-y-4">
                {entry.acts.map((act, i) => (
                  <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-purple-400 hover:text-purple-300">
                        {act.act}
                      </h4>
                      <a
                        href={act.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300"
                        title="View Full Law"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No data found.</p>
        )}
      </div>
    </section>
  );
}