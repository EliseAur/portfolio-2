import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-[60px] flex flex-col items-center justify-center w-full min-h-screen bg-purple pt-5 pb-20 mx-auto"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <h2 className="text-3xl mb-8 font-headings font-black tracking-tight">Latest projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-grey rounded-xs shadow-xs max-w-[360px] flex flex-col h-full"
          >
            <Link to={`/projects/${project.id}`} state={{ fromHome: true }}>
              <div>
                <img
                  src={project.images.desktop}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xs"
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-1">
              <Link
                to={`/projects/${project.id}`}
                state={{ fromHome: true }}
                className="hover:text-dark-purple"
              >
                <h3 className="font-headings tracking-tight text-2xl font-black mb-2">
                  {project.title}
                </h3>
              </Link>
              <p className="font-headings tracking-tight font-semibold text-dark-purple">
                {project.projectType}
              </p>
              <p className="font-headings text-sm font-semibold tracking-tight mb-3">
                {project.keyWords}
              </p>
              <p className="font-headings tracking-tight mb-0 break-words line-clamp-3">
                {project.description.short}
              </p>

              <Link
                to={`/projects/${project.id}`}
                state={{ fromHome: true }}
                className="font-semibold underline hover:text-dark-purple hover:decoration-2 underline-offset-3 mb-4"
              >
                Read more
              </Link>

              <div className="flex flex-row justify-between space-x-2 mt-auto">
                <a
                  href={project.links.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-links bg-black text-white text-sm text-center py-3 px-auto rounded-xs hover:cursor-pointer hover:bg-dark-purple uppercase flex-grow"
                >
                  GitHub
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-links bg-black text-white text-sm text-center py-3 px-auto rounded-xs hover:cursor-pointer hover:bg-dark-purple uppercase flex-grow"
                >
                  Live site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
