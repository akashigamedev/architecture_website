import React from "react";
import WhoWeAre from "../../components/whoweare/WhoWeAre";
import Card from "../../components/card/Card";
import Leader from "../../components/leaders/Leaders";
import Achivements from "../../components/achievement/Achievements";
import Spacer from '../../components/Spacer';
export default function About() {
  return (
    <div>
      <Spacer size={'small'} />
      <WhoWeAre />
      <Spacer />
      <Card />
      <Spacer />
      <Leader />
      <Achivements />
    </div>
  );
}
