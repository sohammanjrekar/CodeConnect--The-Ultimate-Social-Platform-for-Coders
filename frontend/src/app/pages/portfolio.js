import React from "react";
import ProjectList from "../components/ProjectList";
import PaperList from "../components/PaperList";

const Home = ({ projects, papers }) => {
  return (
    <div>
      <ProjectList projects={projects} />
      <PaperList papers={papers} />
    </div>
  );
};

export async function getServerSideProps() {
  const resProjects = await fetch("http://localhost:8000/api/projects/");
  const projects = await resProjects.json();

  const resPapers = await fetch("http://localhost:8000/api/papers/");
  const papers = await resPapers.json();

  return {
    props: {
      projects,
      papers,
    },
  };
}

export default Home;
