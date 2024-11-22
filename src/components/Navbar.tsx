import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="mx-auto px-12">
        <div className="flex items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/hirylogo.png" 
              alt="Airy Logo" 
              width={64} 
              height={32}
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
