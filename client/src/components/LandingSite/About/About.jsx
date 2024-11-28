import { TeamCard } from "./TeamMember";
function About() {

  const ahad = {
    name: "Deepak Kumar",
    designation: "Front-end Engineer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const Gourav = {
    name: "Gourav",
    designation: "Backend-end Engineer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const Devyansh = {
    name: "Devyansh",
    designation: "Front End Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  // const muneeb = {
  //   name: "Muneeb Ahmed",
  //   designation: "Front End Developer",
  //   image:
  //     "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  // };
  // const arsal = {
  //   name: "Syed Arsal",
  //   designation: "Database",
  //   image:
  //     "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  // };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={ahad} />
        <TeamCard member={Gourav} />
        <TeamCard member={Devyansh} />
        {/* <TeamCard member={arsal} />
        <TeamCard member={muneeb} /> */}
      </div>
    </>
  );
}
export { About };
