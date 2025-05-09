const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">How It Works</h1>
      <p className="text-lg mb-6">
        EquiRights is designed to make legal rights more accessible — especially for women, LGBTQ+ individuals, and people with disabilities — across different countries.
      </p>
      <h3 className="text-3xl font-bold mb-4">Guide:</h3>
      <p className="mb-4">
        Users start by selecting a country and, optionally, the identity groups they belong to. The platform then displays relevant legislations, important rulings or cases and protections applicable to those communities in that country.
      </p>
      <p className="mb-4">
        If no filters are selected, the page shows all available data for the selected country. I've kept the interface clean and minimal to ensure ease of use, even for first-time visitors.
      </p>
      <p className="mb-4">
        You can also compare two countries side by side (coming soon!) or browse crisis hotlines and legal support organizations. The goal is to help users stay informed, aware, and empowered.
      </p>
    </div>
  );
};

export default HowItWorks;