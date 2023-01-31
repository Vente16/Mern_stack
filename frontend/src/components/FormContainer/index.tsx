/* eslint-disable */
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function FormContainer({ children }: Props) {
  return (
    <div className="bg-gray-50 relative z-0 divide-y divide-gray-200 border-b border-gray-200 p-5">
      <div className="bg-white grid grid-cols-1 md:ml-8 md:mt-6 md:p-8 ml-6 mt-6 overflow-hidden p-6 rounded-lg shadow">
        {children}
      </div>
      {/*<div className="flex justify-between mt-5">
          <div>
            <button type="button" className="btn btn-active">
              <div className="flex flex-col items-start">
                <span className="text-xs font-normal md:block">Atrás</span>
              </div>
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-active btn-primary">
              <div className="flex flex-col items-end">
                <span className="text-xs font-normal md:block">Siguiente</span>
              </div>
            </button>
          </div>
  </div> */}
    </div>
  );
}

export default FormContainer;
