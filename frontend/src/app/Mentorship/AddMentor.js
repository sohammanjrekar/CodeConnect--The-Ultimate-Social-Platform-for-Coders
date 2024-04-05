import React, { useState } from 'react';

const AddMentor = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    expertise: '',
    availability: '',
    user: 25, // Default value for user
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit mentor data');
      }
      console.log('succeesfullt mentor');
    } catch (error) {
      console.error('Error submitting mentor data:', error.message);
      // Handle error, e.g., show error message to user
    }
  };
  

  return (
    <div className="px-6 p-2 bg-white relative justify-center items-center w-1/2 m-auto mx-auto h-1/3 sm:h-1/3 md:w-1/3 md:h-1/3 lg:w-full lg:mx-5 lg:h-1/3 rounded-3xl filter drop-shadow-2xl">
        
      <div className="my-2 sm:mt-5">
        <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black">
         ADD Mentor
        </h1>
      </div>
     
      <div className="mt-3 sm:mt-8">
        <form onSubmit={handleSubmit} className="flex-col flex">
          <label htmlFor="expertise" className="text-gray-700 text-xs sm:text-md">Expertise:</label>
          {/* Input for expertise */}
          <input
            type="text"
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleInputChange}
            className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
          />
          <label htmlFor="availability" className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">Availability:</label>
          {/* Input for availability */}
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"
          />
          {/* Hidden input for user */}
          <input
            type="hidden"
            id="user"
            name="user"
            value={formData.user}
          />
          <button type="submit" className="bg-blue-600 text-gray-100 rounded-md h-8 sm:h-auto sm:rounded-lg w-20 sm:w-52 p-1 text-xs sm:text-md sm:p-3">Submit</button>
        </form>
       
      </div>
    </div>
  );
};

export default AddMentor;
