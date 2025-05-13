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
          <div key={project.id} className="bg-grey rounded-xs shadow-xs max-w-[360px]">
            <Link to={`/projects/${project.id}`}>
              <div>
                <img
                  src={project.images.desktop}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xs"
                />
              </div>
            </Link>
            <div className="p-4">
              <Link to={`/projects/${project.id}`} className="hover:text-dark-purple">
                <h3 className="font-headings tracking-tight text-2xl font-black mb-2">
                  {project.title}
                </h3>
              </Link>
              <p className="font-headings tracking-tight font-semibold text-dark-purple">
                {project.projectType}
              </p>
              <p className="font-headings tracking-tight mb-3">{project.keyWords}</p>
              <p className="font-headings tracking-tight mb-4">{project.description.short}</p>
              <Link
                to=""
                className="font-links uppercase text-black underline hover:text-dark-purple hover:decoration-2 underline-offset-3"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
