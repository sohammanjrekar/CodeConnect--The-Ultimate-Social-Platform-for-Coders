const Skills = () => {
  // Fetch skills from API or state
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "SQL",
    "...",
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Skills</h2>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-300 px-2 py-1 rounded-full text-sm m-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
