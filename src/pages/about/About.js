import React from "react";
import WhoWeAre from "../../components/whoweare/WhoWeAre";
import Card from "../../components/card/Card";
import Leader from "../../components/leaders/Leaders";
import Achivements from "../../components/achievement/Achievements";

export default function About() {
  return (
    <div>
      <WhoWeAre />
      <Card />
      <Leader />
      <Achivements />
    </div>
  );
}
