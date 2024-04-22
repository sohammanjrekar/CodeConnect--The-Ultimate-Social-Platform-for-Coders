import React from 'react';

const Calender = () => {
  // Get the current date
  const currentDate = new Date();
  // Array to hold the days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Generate dates for the current week
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date.getDate());
  }

  return (
    <div>
      <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg  mx-auto py-4 px-2 md:mx-12">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`flex group rounded-lg mx-1 transition-all duration-300 cursor-pointer justify-center w-16 ${
              date === currentDate.getDate() ? 'bg-purple-600' : 'hover:bg-purple-500 hover:shadow-lg hover-dark-shadow'
            }`}
          >
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className={`text-gray-900 ${date === currentDate.getDate() ? 'text-gray-100' : 'group-hover:text-gray-100'} text-sm transition-all duration-300`}>
                  {daysOfWeek[(currentDate.getDay() + index) % 7]} {/* Get the day of the week */}
                </p>
                <p className={`text-gray-900 ${date === currentDate.getDate() ? 'text-gray-100' : 'group-hover:text-gray-100'} mt-3 ${date === currentDate.getDate() ? 'font-bold' : 'group-hover:font-bold'} transition-all duration-300`}>
                  {date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
