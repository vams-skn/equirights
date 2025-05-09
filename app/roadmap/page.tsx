export const metadata = {
    title: "Roadmap",
    description: "a global legislations aggregator and navigator for marginalised communities",
};

import PageIllustration from "@/components/page-illustration";

export default function Todo() {
return (
    <>
    <PageIllustration />
    <div className="max-w-3xl mx-auto px-2 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Changelog Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Changelog</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>v1.0</strong> - May 2025
                <ul className="list-[square] list-inside ml-5 space-y-1">
                  <li>Initial launch with data for USA & India and community filters</li>
                  <li>An About and How It Works pages</li>
                  <li>Feedback page and footer links integrated</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Roadmap Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Roadmap</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Add more countries' legislations</li>
              <li>Create the 'Country Comparisions' tool</li>
              <li>Introduce PDF export in the Search page</li>
              <li>Enable community-contributed resources via form</li>
              <li>Multilingual support</li>
              <li>Accessibility enhancements and screen reader optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}