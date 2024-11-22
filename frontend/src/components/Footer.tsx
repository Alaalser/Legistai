// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {new Date().getFullYear()} My App. All rights reserved.
    </footer>
  );
};

export default Footer;
