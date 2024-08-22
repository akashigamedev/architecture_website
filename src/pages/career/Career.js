import React, { useState } from "react";
import WorkWithUs from "../../components/workwithus/WorkWithUs.js";
import Benefits from "../../components/benefits/Benefits.js";
import Opportunites from "../../components/opportunities/Opportunities";

export default function Career() {
  return (
    <div>
      <WorkWithUs />
      <Benefits />
      <Opportunites />
    </div>
  );
}
