import React, { useState } from 'react';
import axios from 'axios';
import FetchTags from './FetchTags';

const AddJobPost = () => {
  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [applicationEmail, setApplicationEmail] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [applicationTrackingLink, setApplicationTrackingLink] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showThanks, setShowThanks] = useState(false);

  const handlePublish = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/jobportal/job-postings/', {
        title,
        company_name: companyName,
        location,
        description,
        requirements,
        is_active: isActive,
        application_email: applicationEmail,
        application_deadline: applicationDeadline,
        salary_min: salaryMin,
        salary_max: salaryMax,
        is_featured: isFeatured,
        application_tracking_link: applicationTrackingLink,
        skills_required: selectedSkills,
        benefits: selectedBenefits,
        categories: selectedCategories,
      });

      if (response.status === 201) {
        console.log('Job post created successfully!');
        setShowThanks(true);
        setTimeout(() => {
          setShowThanks(false);
          setTitle('');
          setCompanyName('');
          setLocation('');
          setDescription('');
          setRequirements('');
          setIsActive(false);
          setApplicationEmail('');
          setApplicationDeadline('');
          setSalaryMin('');
          setSalaryMax('');
          setIsFeatured(false);
          setApplicationTrackingLink('');
          setSelectedSkills([]);
          setSelectedBenefits([]);
          setSelectedCategories([]);
        }, 3000);
      } else {
        console.error('Error creating job post:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto dark:bg-gray-800 rounded-t-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4 p-6 w-full dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
            <h1 className="text-center text-white text-2xl">Add Job Post</h1>
            <div className="my-3 px-4 bg-white rounded-t-lg dark:bg-gray-800 py-4">
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            {/* Add more input fields for other job post details */}
            {/* FetchTags component for selecting skills, benefits, and categories */}
            <FetchTags
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
              selectedBenefits={selectedBenefits}
              setSelectedBenefits={setSelectedBenefits}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <div className="py-2 px-4 rounded-b-lg">
              <button
                type="submit"
                onClick={handlePublish}
                className="inline-flex items-center my-5 px-8 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Publish Job Post
              </button>
            </div>
          </div>
        </form>
      </div>
      {showThanks && (
        <div className="bg-green-200 text-green-800 py-2 text-center">
          <p>Thanks for publishing the job post!</p>
        </div>
      )}
    </>
  );
};

export default AddJobPost;
