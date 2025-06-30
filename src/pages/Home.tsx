import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Me from "@/components/sections/Me";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  const sections = [
    { id: "me", title: "About Me", component: <Me /> },
    { id: "tech-stack", title: "Tech Stack", component: <TechStack /> },
    { id: "work-experience", title: "Work Experience", component: <WorkExperience /> },
    { id: "projects", title: "Projects", component: <Projects /> },
    { id: "education", title: "Education", component: <Education /> },
    { id: "certifications", title: "Certifications", component: <Certifications /> },
  ];

  return (
    <>
      {sections.map(({ id, title, component }) => (
        <section key={id} id={id} className="scroll-mt-20 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {component}
        </section>
      ))}
    </>
  );
}
