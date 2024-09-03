import React from "react";
import { useParams } from "react-router-dom";
import Calculator from "../../components/calculator/Calculator";
import Spacer from "../../components/Spacer";
import Testimonials from "../../components/testimonials.js/Testimonials";
import data from "../../db/services/client.json";
import projectData from "../../db/services/services.json";
import ProjectSection from "../../components/product_section/ProductSection";

export default function Services() {
  const { serviceType } = useParams();
  const selectedService = projectData.filter(
    (item) => item.type === serviceType
  )[0];
  return (
    <>
    <Spacer />
      <ProjectSection
        title={selectedService.title}
        description={selectedService.description}
        data={selectedService.products}
        btnTitle={"Load More"}
        link={() => {/* Load function here */}}
      />
      <Spacer />
      <Calculator />
      <Spacer />
      <Testimonials
        title={"Reviews Of Statisfied Clients"}
        description={
          "Hear directly from our satisfied clients about their experiences working with us. Their testimonials highlight our commitment to exceptional design, personalized service, and successful project outcomes."
        }
        data={data}
      />
      <Spacer size="small" />
    </>
  );
}
