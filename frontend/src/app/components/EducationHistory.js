const EducationHistory = () => {
  // Fetch education history from API or state
  const educationHistory = [
    {
      id: 1,
      school: "University of XYZ",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      graduationYear: 2020,
      // ...
    },
    // ...
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Education</h2>
      {educationHistory.map((education) => (
        <div key={education.id} className="p-4 border rounded my-2">
          <h3 className="text-md font-semibold">{education.degree}</h3>
          <p>{education.school}</p>
          <p>{education.graduationYear}</p>
          {/* Other education details */}
        </div>
      ))}
    </div>
  );
};

export default EducationHistory;
