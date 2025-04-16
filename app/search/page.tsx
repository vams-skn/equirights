export const metadata = {
  title: "Search Country",
  description: "a global rights aggregator and navigator for marginalised communities",
};

import PageIllustration from "@/components/page-illustration";
import SearchCountry from "@/components/search-country";

export default function Search() {
  return (
    <>
      <PageIllustration />
      <SearchCountry />
    </>
  );
}
