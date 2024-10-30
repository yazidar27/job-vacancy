import React, { useEffect, useState } from 'react';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContentA() {
  const [jobVacancies, setJobVacancies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://job-vacancy-api.vercel.app/api/jobs')
      .then(response => {
        setJobVacancies(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the job vacancies!", error);
      });
  }, []);

  return (
    <div className="m-5 p-5">
      <h2 className="text-3xl font-bold text-center mb-5">Job Vacancy</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {jobVacancies.map((job) => (
          <Card className="w-full sm:w-64 p-5" key={job._id}>
            <img
              src={job.company_image_url}
              alt={`${job.company_name} logo`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {job.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
              {job.job_description}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
              <strong>Qualification:</strong> {job.job_qualification}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
              <strong>Type:</strong> {job.job_type}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
              <strong>Tenure:</strong> {job.job_tenure}
            </p>
            <p className={`font-normal ${job.job_status ? 'text-green-500' : 'text-red-500'} mb-2`}>
              <strong>Status:</strong> {job.job_status ? 'Open' : 'Closed'}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
              <strong>Company:</strong> {job.company_name}, {job.company_city}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
              <strong>Salary:</strong> Rp {job.salary_min.toLocaleString()} - Rp {job.salary_max.toLocaleString()}
            </p>
            <Button onClick={() => navigate(`/job/${job._id}`)}>
              Detail
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ContentA;