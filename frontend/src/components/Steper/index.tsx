/* eslint-disable */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from '@components/FormContainer';
import ItemSteper, { Props as ItemSteperProps } from './components/ItemSteper';
import DataPersonal from '@components/DataPersonal';
import DataAcademic from '@components/DataAcademic';
import Summary from '@components/Summary';
import { useAppSelector } from '@hooks/redux';
import { StudentI } from '@interfaces/studentInterfaces';
import { initialState } from '@appRedux/reducers/student';
import { saveStudent, StudentStorage } from '../../services/students';

const steperItems: ItemSteperProps[] = [
  { title: 'Información estudiante', id: '1' },
  { title: 'Agregar notas', id: '2' },
  { title: 'Detalle información', id: '3' }
];

function Steper() {
  const navigate = useNavigate();
  const student = useAppSelector(state => state.student);
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => setCurrentStep(prevCount => prevCount + 1);
  const handlePrev = () => setCurrentStep(prevCount => prevCount - 1);
  const [studentData, setStudentData] = useState<StudentI>(initialState);
  const handleRegister = async () => {
    try {
      const response = await saveStudent(studentData);
      const result = await response.data;
      const { student } = result as StudentStorage;
      navigate('/');
    } catch ({ message }) {
      // TODO
    }
  };

  useEffect(() => {
    setStudentData(student);
  }, [student]);

  return (
    <div className="relative pl-4 pr-6 py-5 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
      <div className="border-b border-gray-200 dark:border-gray-700 ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {steperItems.map((item, index) => (
            <ItemSteper
              key={item.id}
              {...item}
              isActive={currentStep === index}
            />
          ))}
        </ul>
      </div>
      {currentStep === 0 && (
        <FormContainer>
          <DataPersonal />
          <div className="flex justify-between mt-5">
            <div>
              <button
                type="button"
                className="btn btn-active btn-primary"
                disabled={!studentData.name || !studentData.identification}
                onClick={handleNext}>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-normal md:block">
                    Siguiente
                  </span>
                </div>
              </button>
            </div>
          </div>
        </FormContainer>
      )}
      {currentStep === 1 && (
        <FormContainer>
          <DataAcademic />
          <div className="flex justify-between mt-5">
            <div>
              <button
                type="button"
                className="btn btn-active"
                onClick={handlePrev}>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal md:block">Atrás</span>
                </div>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-active btn-primary"
                disabled={!studentData.subjects.length}
                onClick={handleNext}>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-normal md:block">
                    Siguiente
                  </span>
                </div>
              </button>
            </div>
          </div>
        </FormContainer>
      )}
      {currentStep === 2 && (
        <FormContainer>
          <Summary {...studentData} />
          <div className="flex justify-between mt-5">
            <div>
              <button
                type="button"
                className="btn btn-active"
                onClick={handlePrev}>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal md:block">Atrás</span>
                </div>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-active btn-primary"
                onClick={handleRegister}>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-normal md:block">
                    Registrar
                  </span>
                </div>
              </button>
            </div>
          </div>
        </FormContainer>
      )}
    </div>
  );
}

export default Steper;
