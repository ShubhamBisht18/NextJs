import Card from "@/components/Card";

const pros = [
  { id: 1, projectName: "OrderEase", description: "QR-based food ordering website", link: "http://localhost:3000" },
  { id: 2, projectName: "VastrFy", description: "E-commerce Clothing Website", link: "http://localhost:3000" },
  { id: 3, projectName: "ChatBox", description: "A Chat website", link: "http://localhost:3000" }
];

const Projects = () => {
  return (
    <div className="w-screen min-h-screen p-6 flex flex-wrap gap-6 justify-center">
      {pros.map((project) => (
        <Card
          key={project.id}
          projectName={project.projectName}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
