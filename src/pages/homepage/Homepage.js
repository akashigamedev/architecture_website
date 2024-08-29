import React from "react";
import Spacer from "../../components/Spacer";
import ContactForm from "../../components/contact_form/ContactForm";
import Hero from "../../components/hero/Hero";
import Process from "../../components/process/Process";
import ProductSection from "../../components/product_section/ProductSection";
import ProjectStats from "../../components/project_stats/ProjectStats";
import ServicesSection from "../../components/services_section/ServicesSection";
import Testimonials from "../../components/testimonials.js/Testimonials";
import data from "../../db/homepage/db.json";

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
      <Testimonials
        title="What Our Clients Say?"
        description="Hear directly from our satisfied clients about their experiences working with us. Their testimonials highlight our commitment to exceptional design, personalized service, and successful project outcomes."
        data={testimonial_data}
      />
      <Spacer />
      <ContactForm />
      <Spacer size={"small"}/>
    </>
  );
}
