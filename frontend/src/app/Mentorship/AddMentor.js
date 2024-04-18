import React, { useState, useEffect } from 'react';

const AddMentor = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    expertise: '',
    availability: '',
    user: 25, // Default value for user
  });
  const [availabilityOptions, setAvailabilityOptions] = useState([]);
  const [showThanks, setShowThanks] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch availability options from the database
    fetchAvailabilityOptions();
  }, []);
  
  const fetchAvailabilityOptions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/');
      if (!response.ok) {
        throw new Error('Failed to fetch availability options');
      }
      const data = await response.json();
      console.log('Fetched availability options:', data);
      const options = data.results.map(option => option.availability);
      console.log('Mapped availability options:', options);
      // Filter out duplicate options
      const uniqueOptions = Array.from(new Set(options));
      console.log('Unique availability options:', uniqueOptions);
      setAvailabilityOptions(uniqueOptions);
    } catch (error) {
      console.error('Error fetching availability options:', error.message);
      // Handle error, e.g., show error message to user
    }
  };
  
  
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
        if (response.status === 400) {
          const errorData = await response.json();
          if (errorData.user && errorData.user.length > 0) {
            // Display the error message
            setErrorMessage(errorData.user[0]);
            setShowError(true);
            // Hide the error message after 0.5 seconds
            setTimeout(() => {
              setShowError(false);
            }, 1300);
            return;
          }
        }
        throw new Error('Failed to submit mentor data');
      }
      
      setShowThanks(true); // Show thank you message
      console.log('Successfully added mentor');
      // Hide the thank you message after 0.5 seconds
      setTimeout(() => {
        setShowThanks(false);
      }, 1300);
    } catch (error) {
      console.error('Error submitting mentor data:', error.message);
      // Handle error, e.g., show error message to user
    }
  };
  
  return (
    <>
      <div className="max-w-5xl mx-auto dark:bg-gray-800 rounded-t-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 p-6 w-full dark:bg-gray-800 rounded-lg border border-gray-200  dark:border-gray-600">
            <h1 className='text-center text-white text-2xl'>Add Mentor</h1>
            {/* Input for expertise */}
            <div className="my-3 px-4 bg-white rounded-t-lg dark:bg-gray-800 py-4">
              <label htmlFor="expertise" className="sr-only">Expertise</label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                className="block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter expertise"
                value={formData.expertise}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Select for availability */}
            <div className="py-2 px-4 bg-white dark:bg-gray-800">
              <label htmlFor="availability" className="sr-only">Availability</label>
              <select
                id="availability"
                name="availability"
                className="block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                value={formData.availability}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            {/* Submit button */}
            <div className="py-2 px-4 rounded-b-lg">
              <button
                type="submit"
                className="inline-flex items-center my-5 px-8 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {showThanks && (
        <div className="bg-green-200 text-green-800 py-2 text-center">
          <p>Thanks for adding a mentor!</p>
        </div>
      )}

      {showError && (
        <div className="bg-red-200 text-red-800 py-2 text-center">
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default AddMentor;
