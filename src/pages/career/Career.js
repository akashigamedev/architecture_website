import React, { useState } from "react";
import WorkWithUs from "../../components/workwithus/WorkWithUs.js";
import Benefits from "../../components/benefits/Benefits.js";
import Opportunites from "../../components/opportunities/Opportunities";
import Spacer from "../../components/Spacer.js";

export default function Career() {
  return (
    <div>
      <Spacer size={"small"} />
      <WorkWithUs />
      <Spacer />
      <Benefits />
      <Spacer />
      <Opportunites />
      <Spacer />
    </div>
  );
}
