"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import React, { useReducer } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Information de contact
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
    title: "Address",
    description: "Boulevard Clovis Constant, Nantes",
  },
];

// État initial et reducer pour la gestion du formulaire
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
  besoin: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Contact = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSelectChange = (value) => {
    dispatch({ type: "SET_FIELD", field: "besoin", value });
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
          {/* Formulaire de contact */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-cyan-400">Travaillons ensemble</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Prénom" />
                <Input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Nom" />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse Email" />
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez votre besoin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisissez votre besoin</SelectLabel>
                    <SelectItem value="dev_web">Développement Web</SelectItem>
                    <SelectItem value="logo_design">Logo Design</SelectItem>
                    <SelectItem value="echange">Échange pour définir votre besoin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" value={formData.message} onChange={handleChange} className="h-[200px]" placeholder="Tapez votre message ici." />
              <Button type="submit" size="md" className="max-w-40 h-[50px]">
                Envoyer
              </Button>
            </form>
          </div>
          {/* Informations de contact */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-cyan-400 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
