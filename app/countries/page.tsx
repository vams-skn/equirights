export const metadata = {
    title: "Countries Supported",
    description: "a global legislations aggregator and navigator for marginalised communities",
};

import PageIllustration from "@/components/page-illustration";

const countries = [
    {
        id: "1",
        name: "India"
    },
    {
        id: "2",
        name: "United States of America"
    }
];

export default function Countries() {
return (
    <>
    <PageIllustration />
    <div>
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Countries</h1>
          <p className="text-lg mb-6">Currently, EquiRights supports the following countries:</p>
          <ul className="space-y-4 text-lg font-medium">
            {countries.map((country) => (
              <li key={country.id}>
                {country.id}. {country.name}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-gray-600 text-sm">
            More countries coming soon!
          </p>
        </div>
        </div>
    </>
);
}  