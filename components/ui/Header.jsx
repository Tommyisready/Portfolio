import Link from "next/link";
import { Button } from "./button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Thomas<span className="text-cyan-400">.</span>
          </h1>
        </Link>

        {/* desktop nav bar and hire me button*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default header;
