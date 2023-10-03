import React from "react";
import { flexBetweeen, projects } from "../../data";
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import ProjectCard from "../../components/Cards/ProjectCard";

export const ProjectPage = () => {
  return (
    <div
      id="projects"
      className={`${flexBetweeen} h-auto bg-dimSecondaryColor  p-8 flex-col`}
    >
      <header className={`w-5/6 flex flex-col gap-2`}>
        <h1 className="text-4xl text-white font-bold self-center">PROJECTS</h1>
        <h2 className="text-3xl text-greyColor self-center">
          Projects ive made sharpening my skills, learning new fundamental
          concepts.
        </h2>
      </header>
      <section>
        {projects.map(
          ({
            projectLink,
            projectImage,
            projectRepo,
            projectType,
            reverse,
            projectName,
            projectDescription,
            projectSkill,
            id,
          }) => (
            <ProjectCard
              key={id}
              projectLink={projectLink}
              projectImage={projectImage}
              projectRepo={projectRepo}
              projectType={projectType}
              reverse={reverse}
              projectName={projectName}
              projectDescription={projectDescription}
              projectSkill={projectSkill}
            />
          )
        )}
      </section>
    </div>
  );
};
