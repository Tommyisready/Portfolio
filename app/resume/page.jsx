"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description: "Nouveau dans le monde du code je m'essaye a plusieurs projets certains reussissent d'autres pas mais cela me permet d'apprendre de mes erreurs et de m'améliorer",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Thomas Perrot",
    },
    {
      fieldName: "Téléphone",
      fieldValue: "06 09 39 74 06",
    },
    {
      fieldName: "Expérience",
      fieldValue: "1ère année",
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Français",
    },
    {
      fieldName: "Alternance",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Email",
      fieldValue: "t.perrot44@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "Français, Anglais",
    },
  ],
};

//experience data
const expériences = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description: "Voici les projets de groupe que j'ai pu mener et qui m'on accordé de l'expérience",
  items: [
    {
      company: "Ada Tech School",
      position: "Pico-8, Jeux en 2D",
      duration: "2 semaines | 3p",
    },
    {
      company: "Ada Tech School",
      position: "Dataviz, Utilisation d'une API",
      duration: "2 semaines | 3p",
    },
    {
      company: "Ada Tech School",
      position: "Extension de navigateur",
      duration: "2 semaines | 3p",
    },
    {
      company: "Ada Tech School",
      position: "Site de vente de meuble, front et back",
      duration: "2 semaines | 3p",
    },
  ],
};

const diplôme = {
  icon: "/assets/resume/cap.svg",
  title: "Mes diplômes",
  description: "Un bref résumé de ce qui fait de moi ce que je suis aujourd'hui",
  items: [
    {
      école: "Ada Tech School",
      diplôme: "Concepteur, Développeur d'app",
      durée: "Mai 2024 - Mai 2026",
    },
    {
      école: "Codecademy",
      diplôme: "Front-End Engineer",
      durée: "Mai 2024 - Aujourd'hui",
    },
    {
      école: "Pigier Performance",
      diplôme: "BTS Mangement des Unités Commerciales",
      durée: "Septembre 2013 - Septembre 2015",
    },
    {
      école: "Cifam",
      diplôme: "Bac Pro Hôtellerie et Restauration",
      durée: "Septembre 2008 - Septembre 2010",
    },
  ],
};

// skills data
const skills = {
  title: "Mes compétences",
  description: "Voici les languages que je pratique et explore au quotidien, ma maitrise est loin d'être parfaite pourtant cela ne m'empeche pas d'apprendre chaque jour",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind.Css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="expériences" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="expériences">Expérience</TabsTrigger>
            <TabsTrigger value="diplôme">Diplôme</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">A propos de moi</TabsTrigger>
          </TabsList>
          {/*content*/}
          <div className="min-h-[70vh] w-full ">
            {/*expériences*/}
            <TabsContent value="expériences" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expériences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{expériences.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expériences.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-cyan-400">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-400 "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*diplome*/}
            <TabsContent value="diplôme" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{diplôme.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{diplôme.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {diplôme.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-cyan-400">{item.durée}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.diplôme}</h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-400 "></span>
                            <p className="text-white/60">{item.école}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*compétences*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan-400 transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*a propos de moi*/}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-3">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
