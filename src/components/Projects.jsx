import { useState } from "react";
import ProjectsList from "../data/ProjectDetails";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? ProjectsList.projects
    : ProjectsList.projects.slice(0, 4);

  return (
    <section id="projects" className="w-full px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gradient">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 bg-gray-600"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-2 text-gray-100 text-sm">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-400 text-white px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="h-[50px] w-[200px] bg-[#ffcc70] text-white rounded-lg transition duration-300 hover:bg-[#e6b35d]"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
