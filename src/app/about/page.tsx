import Navbar from "../componets/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">About This App</h1>
        <p>This app uses the Quotable API to displaying random inspirationaling quotes.</p>
      </div>
    </div>
  );
};

export default About;
