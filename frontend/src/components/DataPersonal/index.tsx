/* eslint-disable */
import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setStudent } from '@appRedux/actions/student';
import InputForm from '@components/InputForm';

function DataPersonal() {
  const dispatch = useAppDispatch();
  const student = useAppSelector(state => state.student);
  const [updateStudent, setUpdateStudent] = useState({
    name: student.name,
    identification: student.identification
  });

  const handleChangeInput = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setUpdateStudent({ ...updateStudent, [name]: value });
  };

  useEffect(() => {
    dispatch(setStudent({ ...student, ...updateStudent }));
  }, [updateStudent]);

  return (
    <form>
      <InputForm
        typeInput="text"
        labelText="Nombre estudiante"
        name="name"
        placeHolder="Ingresa el nombre del estudiante"
        onChange={handleChangeInput}
        value={updateStudent.name}
      />
      <InputForm
        typeInput="text"
        labelText="Número de documento"
        name="identification"
        placeHolder="identificación del estudiante"
        onChange={handleChangeInput}
        value={updateStudent.identification || ''}
      />
    </form>
  );
}

export default DataPersonal;
