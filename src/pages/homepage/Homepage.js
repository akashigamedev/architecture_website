import React from "react";
import styles from "./Homepage.module.css";
import ProductSection from "../../components/product_section/ProductSection";
import data from "../../db/homepage/db.json";
import Spacer from "../../components/Spacer";
import ProjectStats from "../../components/project_stats/ProjectStats";
import Process from "../../components/process/Process";
import Testimonials from "../../components/testimonials.js/Testimonials";
import ContactForm from "../../components/contact_form/ContactForm";
import ServicesSection from "../../components/services_section/ServicesSection";
import Hero from "../../components/hero/Hero";

export default function Homepage() {
  const {
    interior_data,
    exterior_data,
    project_stats,
    process_data,
    testimonial_data,
  } = data;
  return (
    <>
      <Hero />
      <Spacer />
      <ProductSection
        title={"Interior Design"}
        description={
          "Transform your living spaces with our stunning interior designs. We create stylish, functional environments tailored to your taste and lifestyle, ensuring comfort and elegance in every detail."
        }
        category={"interior"}
        data={interior_data}
      />
      <Spacer />
      <ProductSection
        title={"Exterior Design"}
        description={
          "Enhance your home's curb appeal with our exceptional exterior designs. We combine aesthetic appeal with functional elements to create beautiful, enduring outdoor spaces that perfectly complement your lifestyle."
        }
        category={"exterior"}
        data={exterior_data}
      />
      <Spacer />
      <ProjectStats data={project_stats} />
      <Spacer />
      <Process data={process_data} />
      <Spacer />
      <ServicesSection />
      <Spacer />
      <Testimonials data={testimonial_data} />
      <Spacer />
      <ContactForm />
      <Spacer />
    </>
  );
}
