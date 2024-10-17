import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Concepteur | Développeur</span>
            <h1 className="h1 mb-6">
              Bonjour, je suis <br />
              <span className="text-cyan-400">Thomas Perrot</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Apprenant concepteur et developpeur d'appli : toujours en train de débugger mes erreurs... mais avec style ! Explorez mes projets où j'apprends, code et parfois même réussis à tout faire
              fonctionner.
            </p>
            {/* button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="public/cv-thomas-perrot.pdf" download></a>
                <span>Télécharger CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-cyan-400 rounded-full flex justify-center items-center
                text-cyan-400 text-base hover:bg-cyan-400 hover:text-black hover:transition all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
