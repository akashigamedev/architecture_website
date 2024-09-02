import React from "react";
import WhoWeAre from "../../components/whoweare/WhoWeAre";
import WhyChooseUs from "../../components/whychooseus/WhyChooseUs";
import Leader from "../../components/leaders/Leaders";
import Achivements from "../../components/achievement/Achievements";
import Spacer from '../../components/Spacer';
export default function About() {
  return (
    <div>
      <WhoWeAre />
      <Spacer />
      <WhyChooseUs />
      <Spacer />
      <Leader />
      <Achivements />
    </div>
  );
}
