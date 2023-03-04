export default function scrollToSection(e) {
  const { id } = e.target;
  if (document) {
    let hookForAboutSection = document.getElementById("about");
    let hookForTeamSection = document.getElementById("team");

    if (!hookForAboutSection || !hookForTeamSection) return;

    switch (id) {
      case "toAbout":
        hookForAboutSection.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });

        break;

      case "toTeam":
        hookForTeamSection.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });

        break;
      default:
        break;
    }
  }
}
