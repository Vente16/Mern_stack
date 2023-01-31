/* eslint-disable */
import { StudentI } from '@interfaces/studentInterfaces';
import TableItem from './components/TableItem';

export interface Props {
  data: StudentI[];
}

function TableRegister({ data }: Props) {
  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
          <h1 className="flex-1 text-xs font-medium m-5">
            Lista de estudiantes
          </h1>
        </div>
      </div>
      <ul
        role="list"
        className="bg-gray-50 relative z-0 divide-y divide-gray-200 border-b border-gray-200">
        <li className="relative pl-4 pr-6 py-5 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
          <div className="text-center">
            {data && !data.length && (
              <h4 className="flex-1 text-lg font-medium">
                Aún no tienes estudiantes registrados
              </h4>
            )}
          </div>
          {data !== null &&
            data.map((item: StudentI) => (
              <TableItem {...item} key={item._id} />
            ))}
        </li>
      </ul>
    </div>
  );
}

export default TableRegister;
