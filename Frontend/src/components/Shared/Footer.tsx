import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">LEDGRBOOK—Where Innovation Meets Simplicity. Lead Smarter.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Cobot Technolab. All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;