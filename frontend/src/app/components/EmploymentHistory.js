const EmploymentHistory = () => {
  // Fetch employment history from API or state
  const employmentHistory = [
    {
      id: 1,
      company: "ABC Inc.",
      position: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2022-05-31",
      // ...
    },
    // ...
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Employment History</h2>
      {employmentHistory.map((job) => (
        <div key={job.id} className="p-4 border rounded my-2">
          <h3 className="text-md font-semibold">{job.position}</h3>
          <p>{job.company}</p>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          {/* Other job details */}
        </div>
      ))}
    </div>
  );
};

export default EmploymentHistory;
