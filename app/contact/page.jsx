"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+33) 6 09 39 74 06",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "t.perrot44@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Boulevard Clovis Constant, Nantes",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    besoin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      besoin: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_tt0jck4", "template_49oelf7", formData, "oKxJWCwVbNcYNFucJ").then(
      (result) => {
        alert("Message envoyé avec succès !");
      },
      (error) => {
        alert("Une erreur est survenue, merci de réessayer.");
      }
    );
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-cyan-400">Travaillons ensemble</h3>
              <p className="text-white/60"></p>
              {/*input*/}
              <div className="grid grid-col-1 md:grid-col-2 gap-6">
                <Input type="firstname" placeholder="Prénom" />
                <Input type="lastname" placeholder="Nom" />
                <Input type="email" placeholder="Adresse Email" />
                <Input type="phone" placeholder="Téléphone" />
              </div>
              {/*select*/}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisis ton besoin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisis ton besoin</SelectLabel>
                    <SelectItem value="est">Développement Web</SelectItem>
                    <SelectItem value="cst">Logo Design</SelectItem>
                    <SelectItem value="mst">Echange pour définir ton besoin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*textarea*/}
              <Textarea className="h-[200px]" placeholder="Tape ton message ici." />
              {/*btn*/}
              <Button size="md" className="max-w-40 h-[50px]">
                Envoyer
              </Button>
            </form>
          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-cyan-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
