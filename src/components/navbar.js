function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">MyApp</div>
          <div className="space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
            <a href="/user" className="text-gray-300 hover:text-white">
              User
            </a>
            <a href="/login" className="text-gray-300 hover:text-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
