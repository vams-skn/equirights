const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">About EquiRights</h1>
      <p className="text-lg mb-6">
        EquiRights is a global platform that centralizes and simplifies access to legal rights and resources for marginalized communities—specifically women, LGBTQ+ individuals, and persons with disabilities.
      </p>
      <p className="mb-4">
        The idea came from a simple but powerful realization that legal awareness can be life-saving, especially when crossing borders. I wanted to create a platform where anyone could quickly check what rights they have in a given country, and how protected they might be.
      </p>
      <p className="mb-4">
        This site was built using React and Tailwind CSS, and is deployed on Vercel. I'm currently working on expanding the database, integrating Firebase, and building a feature to compare rights between two countries.
      </p>
      <p className="mb-4">
        I believe access to rights information should be universal, intersectional, and empowering. This platform was built as part of a hackathon to highlight how technology can make human rights more accessible. I aim to grow this into a comprehensive, community-sourced resource. Thank you for visiting EquiRights.
      </p>
      <p className="text-sm text-gray-600 mt-8">
        Built with ❤️ using React and open data.
      </p>
    </div>
  );
};

export default About;