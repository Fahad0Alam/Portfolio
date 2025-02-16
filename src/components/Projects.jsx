function Projects({ projects }) {
    return (
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold">Projects</h2>
        <ul className="mt-4">
          {projects?.map((project, index) => (
            <li key={index} className="mb-2">
              <a href={project.link} className="text-blue-500">
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Projects;
  