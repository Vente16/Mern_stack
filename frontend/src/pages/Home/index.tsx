/* eslint-disable */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TableRegister from '@components/TableRegister';
import { StudentI } from '@interfaces/studentInterfaces';
import { getStudents, StudentsList } from '../../services/students';

function Home() {
  const [data, setData] = useState<StudentI[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getStudents();
        const result = await response.data;
        const { students } = result as StudentsList;
        setData(students);
      } catch ({ message }) {
        setError(message as string);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="h-full row-span-2" role="main">
      <div className="h-full w-full min-h-screen phx-connected">
        <div
          className="fixed top-0 left-0 w-1/2 min-h-screen bg-white"
          aria-hidden="true"
        />
        <div
          className="fixed top-0 right-0 w-1/2 min-h-screen bg-gray-50"
          aria-hidden="true"
        />
        <div className="relative min-h-full flex flex-col">
          <div className="flex-grow w-full min-h-screen max-w:20	mx-auto xl:px-8 lg:flex">
            <div className="flex-1 min-w-0 bg-white xl:flex">
              <div className="xl:flex-shrink-0 xl:w-80 xl:border-r xl:border-gray-200 bg-white">
                <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-8">
                      <div className="space-y-8 sm:justify-between sm:items-center xl:block xl:space-y-8">
                        <div className="flex flex-col sm:flex-row xl:flex-col">
                          <Link
                            to="/add"
                            relative="path"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                            data-phx-link="redirect"
                            data-phx-link-state="push">
                            Registrar estudiante
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main */}
              <TableRegister data={data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
