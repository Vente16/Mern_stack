/* eslint-disable */
import { ReactNode } from 'react';
import { StudentI } from '@interfaces/studentInterfaces';

interface Props extends StudentI {
  children?: ReactNode;
}

function Summary({ name, identification, subjects }: Props) {
  return (
    <div className="bg-white grid grid-cols-1 md:ml-8 md:mt-6 md:p-8 ml-6 mt-6 overflow-hidden p-6 rounded-lg shadow">
      <div className="flex items-baseline flex-wrap">
        <h2 className="text-xl font-medium leading-6 mr-auto">
          Nombre estudiante: {name}
        </h2>
        <h2 className="text-xl font-medium leading-6 mr-auto">
          Documento estudiante: {identification}
        </h2>
      </div>

      <div className="bg-gray-50 border-slate-300 mt-5 p-5">
        <h2 className="text-xl font-medium leading-6 mr-auto mb-1">
          Asignaturas
        </h2>
        <hr className="mb-5" />

        {subjects.map((subject, index) => (
          <div
            tabIndex={index}
            key={`${index}_sum`}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-5">
            <div className="collapse-title text-xl font-medium">
              Nombre asignatura: {subject.name}
            </div>
            <div className="collapse-content">
              <p className="text-xl font-medium">
                Notas: {subject.grades.join(' | ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
