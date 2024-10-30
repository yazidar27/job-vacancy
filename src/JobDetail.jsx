import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'flowbite-react';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = React.useState(null);

  React.useEffect(() => {
    // Fetch the specific job detail based on the ID
    fetch(`https://job-vacancy-api.vercel.app/api/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => console.error('Error fetching job detail:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-2 pt-24 p-5">
      <Card className="max-w-lg mx-auto p-6 shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-900 dark:text-white">
          {job.title}
        </h2>
        <img
          src={job.company_image_url}
          alt={job.company_name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Description:</strong> {job.job_description}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Qualification:</strong> {job.job_qualification}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Type:</strong> {job.job_type}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Tenure:</strong> {job.job_tenure}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Status:</strong> {job.job_status ? 'Open' : 'Closed'}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Salary:</strong> Rp {job.salary_min.toLocaleString()} - Rp {job.salary_max.toLocaleString()}</p>
        <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Company:</strong> {job.company_name}, {job.company_city}</p>
      </Card>
    </div>
  );
}

export default JobDetail;