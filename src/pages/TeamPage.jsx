import { TeamCard } from "../components/team/TeamCard";
import { TeamContent } from "../components/team/TeamContent";
import { TeamHeader } from "../components/team/TeamHeader";

import image1 from "../assets/teamImage.jpg";

const data = [
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
];

const TeamPage = () => {
  return (
    <>
      <TeamHeader />
      <TeamCard data={data} />
      <TeamContent />
    </>
  );
};

export default TeamPage;
