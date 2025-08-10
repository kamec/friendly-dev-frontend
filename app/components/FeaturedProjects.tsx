import { useEffect } from "react";
import { useFetcher } from "react-router";
import ProjectCard from "./ProjectCard";
import type { Project } from "~/types";

const FeaturedProjects = ({
  projects,
  count,
}: {
  projects: Project[];
  count: number;
}) => {
  //const featured = projects.filter((p) => p.featured).slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        🌟 Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
