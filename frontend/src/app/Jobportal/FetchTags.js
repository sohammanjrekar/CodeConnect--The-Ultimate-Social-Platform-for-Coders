import React, { useState, useEffect } from 'react';

const FetchTags = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch('http://127.0.0.1:8000/jobportal/job-categories/');
        const benefitsResponse = await fetch('http://127.0.0.1:8000/jobportal/benefits/');
        const skillsResponse = await fetch('http://127.0.0.1:8000/jobportal/skills/');

        const categoriesData = await categoriesResponse.json();
        const benefitsData = await benefitsResponse.json();
        const skillsData = await skillsResponse.json();

        console.log('Fetched Categories:', categoriesData.results);
        console.log('Fetched Benefits:', benefitsData.results);
        console.log('Fetched Skills:', skillsData.results);

        setCategories(categoriesData.results);
        setBenefits(benefitsData.results);
        setSkills(skillsData.results);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleCategorySelection = (categoryId) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryId) ? prevCategories.filter((id) => id !== categoryId) : [...prevCategories, categoryId]
    );
  };

  const handleBenefitSelection = (benefitId) => {
    setSelectedBenefits((prevBenefits) =>
      prevBenefits.includes(benefitId) ? prevBenefits.filter((id) => id !== benefitId) : [...prevBenefits, benefitId]
    );
  };

  const handleSkillSelection = (skillId) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skillId) ? prevSkills.filter((id) => id !== skillId) : [...prevSkills, skillId]
    );
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
      />
      <div className="max-w-5xl mx-auto my-3">
        <h4 className='text-white'>Select Categories:</h4>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`p-2 m-1 ${selectedCategories.includes(category.id) ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleCategorySelection(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="max-w-5xl mx-auto my-3">
        <h4 className='text-white'>Select Benefits:</h4>
        {benefits.map((benefit) => (
          <button
            key={benefit.id}
            className={`p-2 m-1 ${selectedBenefits.includes(benefit.id) ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleBenefitSelection(benefit.id)}
          >
            {benefit.name}
          </button>
        ))}
      </div>
      <div className="max-w-5xl mx-auto my-3">
        <h4 className='text-white'>Select Skills:</h4>
        {skills.map((skill) => (
          <button
            key={skill.id}
            className={`p-2 m-1 ${selectedSkills.includes(skill.id) ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleSkillSelection(skill.id)}
          >
            {skill.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FetchTags;
