import React from "react";
import Calculator from "../../components/calculator/Calculator";
import Testimonials from "../../components/testimonials.js/Testimonials";
import data from "../../db/services/client.json";
import Spacer from '../../components/Spacer';

export default function Services() {
  return (
    <div>
      <Calculator />
      <Testimonials
        title={"Reviews Of Statisfied Clients"}
        description={
          "Hear directly from our satisfied clients about their experiences working with us. Their testimonials highlight our commitment to exceptional design, personalized service, and successful project outcomes."
        }
        data={data}
      />
      <Spacer/>
    </div>
  );
}
