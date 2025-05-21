import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * ProjectDetail page displays detailed information about a single project.
 *
 * Features:
 * - Fetches project data by ID from the URL params
 * - Updates the document title based on the project
 * - Smoothly scrolls to top if navigated from home
 * - Shows project images, title, type, keywords, description, features, and links to GitHub/live site
 * - Handles "project not found" state
 *
 * @component
 * @example
 * return (
 *   <ProjectDetail />
 * )
 */
export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromHome) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50); // 50ms delay
    }
  }, [location.state]);

  useEffect(() => {
    document.title = `${project.title} | Portfolio`;
    // Clean up if needed
    return () => {
      document.title = "Portfolio";
    };
  }, [project.title]);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 mx-auto">
      <div className=" md:max-w-3xl lg:max-w-4xl mx-auto sm:py-5 sm:px-4">
        <div className="flex flex-col md:flex-row md:h-88 lg:h-104 gap-2">
          <img
            src={project.images.desktop}
            alt={project.title}
            className="h-full object-cover rounded-xs flex-grow shadow-xs"
          />
          <img
            src={project.images.mobile}
            alt={project.title}
            className="hidden md:block h-full object-contain rounded-xs"
          />
        </div>
        <div className="flex flex-col md:flex-row mt-4 gap-2 max-w-2xl md:ml-5">
          <div className="mx-5 py-5 md:mx-0">
            <h1 className="text-3xl font-headings font-black tracking-tight mb-1">
              {project.title}
            </h1>
            <p className=" font-headings text-dark-purple font-semibold tracking-tight ">
              {project.projectType}
            </p>
            <p className="font-headings text-sm font-semibold tracking-tight mb-3">
              {project.keyWords}
            </p>
            <div className="rounded-xs mb-4">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="whitespace-pre-line">{project.description.long}</p>
            </div>
            <div className="rounded-xs mb-4">
              <h2 className="text-xl font-bold">Features</h2>
              <ul className="list-disc ml-6">
                {project.description.featuresList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <p>
                To view more details about the project check out the repository and readme.md file
                on <span className="font-semibold">GitHub</span> or view the{" "}
                <span className="font-semibold">Live Site</span>.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={project.links.git}
                target="_blank"
                rel="noopener noreferrer"
                className="font-links bg-black text-white text-sm text-center py-3 px-6 rounded-xs hover:bg-dark-purple uppercase"
              >
                GitHub
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-links bg-black text-white text-sm text-center py-3 px-6 rounded-xs hover:bg-dark-purple uppercase"
              >
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
