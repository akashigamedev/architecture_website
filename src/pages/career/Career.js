import React from "react";
import Benefits from "../../components/benefits/Benefits.js";
import Spacer from "../../components/Spacer.js";
import WorkWithUs from "../../components/workwithus/WorkWithUs.js";
import Opportunities from '../../components/opportunities/Opportunities.js';

export default function Career() {
  return (
    <div>
      <Spacer size={"small"} />
      <WorkWithUs />
      <Spacer />
      <Benefits />
      <Spacer />
      <Opportunities />
      <Spacer />
    </div>
  );
}
