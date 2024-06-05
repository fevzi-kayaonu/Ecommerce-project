import { TeamCard } from "../components/team/TeamCard";
import { TeamContent } from "../components/team/TeamContent";
import { TeamHeader } from "../components/team/TeamHeader";

const TeamPage = () => {
  return (
    <>
      <TeamHeader />
      <TeamCard />
      <TeamContent />
    </>
  );
};

export default TeamPage;
