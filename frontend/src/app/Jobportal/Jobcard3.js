import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Jobcard3 = ({ post }) => {
  const [skills, setSkills] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillPromises = post.skills_required.map(skillId => {
          return fetch(`http://127.0.0.1:8000/jobportal/skills/${skillId}/`).then(response => response.json());
        });
        const skillData = await Promise.all(skillPromises);
        setSkills(skillData);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    const fetchBenefits = async () => {
      try {
        const benefitPromises = post.benefits.map(benefitId => {
          return fetch(`http://127.0.0.1:8000/jobportal/benefits/${benefitId}/`).then(response => response.json());
        });
        const benefitData = await Promise.all(benefitPromises);
        setBenefits(benefitData);
      } catch (error) {
        console.error('Error fetching benefits:', error);
      }
    };

    const fetchCategory = async () => {
      try {
        const categoryId = post.categories[0]; // Assuming only one category for simplicity
        const response = await fetch(`http://127.0.0.1:8000/jobportal/job-categories/${categoryId}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch category');
        }
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchSkills();
    fetchBenefits();
    fetchCategory();
  }, [post]);

  return (
    <Link href={`Jobportal/${post.id}`}>
    <div key={post.id} className='max-w-5xl mx-auto dark:bg-gray-800 rounded-t-lg'>
      <div className="group bg-gray-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-4">
        <div className="mb-3 text-right">
          <button className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <img
            className="aspect-[2/2] w-16"
            src="https://img.icons8.com/fluency/48/null/mac-os.png"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-50">{post.company_name}</h3>
            <span className="text-xs text-gray-300">{post.location}</span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-medium text-gray-200">{post.title}</h3>
          <div className="text-sm font-medium">
            {/* Render skills required */}
            {skills.map(skill => (
              <span key={skill.id} className="m-1 ml-0 inline-block text-blue-500">
                {skill.name}
              </span>
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-400">
            {/* Render salary */}
            ₹{post.salary_min} - ₹{post.salary_max} per year
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-50">{post.application_email}</span>
          <a href={post.application_tracking_link} className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80">
            Apply Now
          </a>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Jobcard3;
