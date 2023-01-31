/* eslint-disable */
import { StudentI } from '@interfaces/studentInterfaces';

interface Props extends StudentI {}

function TableItem({ name, identification, subjects }: Props) {
  return (
    <div className="bg-white grid grid-cols-1 md:ml-8 md:mt-6 md:p-8 ml-6 mt-6 overflow-hidden p-6 rounded-lg shadow m-5">
      <header className="flex items-baseline flex-wrap">
        <h2 className="text-xl font-medium leading-6 mr-auto">{name}</h2>
        <h2 className="text-xl font-medium leading-6 mr-auto">
          {identification}
        </h2>
      </header>

      <div className="bg-gray-50 border-slate-300 mt-5 p-5">
        <h2 className="text-xl font-medium leading-6 mr-auto mb-1">
          Asignaturas
        </h2>
        <hr className="mb-5" />

        {subjects.map(({ name, grades }, index) => (
          <div
            key={`${index}_subj`}
            tabIndex={index}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-5">
            <div className="collapse-title text-xl font-medium">
              Nombre asignatura: {name}
            </div>
            <div className="collapse-content">
              <p>Notas: {grades.join(' | ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableItem;
