import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    {
      name: "Me",
      link: "#me",
      id: "me",
    },
    {
      name: "Tech Stack",
      link: "#tech-stack",
      id: "tech-stack",
    },
    {
      name: "Work Experience",
      link: "#work-experience",
      id: "work-experience",
    },
    {
      name: "Projects",
      link: "#projects",
      id: "projects",
    },
    {
      name: "Education",
      link: "#education",
      id: "education",
    },
    {
      name: "Certifications",
      link: "#certifications",
      id: "certifications",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");

    // Home 클릭 시 최상단으로 스크롤
    if (targetId === "me") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-[#e5e5e5]">
      <nav className="max-w-7xl px-6 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* 루트 영역 */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-diatype-extended">
              Hyerin Choi
            </a>
          </div>

          {/* 네비게이션 메뉴 */}
          <ul className="flex space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.name}>
                  <a
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className={`text-base font-normal transition-colors duration-200 ${
                      isActive ? "text-red-500 font-medium" : "text-black hover:text-red-500/98"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
