/* eslint-disable */
import { FormEvent, useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setSubjects } from '@appRedux/actions/student';
import InputForm from '@components/InputForm';
import Subject, { Props as SubjectProps } from './components/Subject';
import { getRandomString } from '@utils/stringUtils';

function DataPersonal() {
  const dispatch = useAppDispatch();
  const student = useAppSelector(state => state.student);
  const [subjectsState, setSubjectsState] = useState<SubjectProps[]>([]);
  const [newSubject, setNewSubject] = useState('');

  useEffect(() => {
    setSubjectsState(student.subjects);
  }, [student]);

  const handleChangeInput = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target as HTMLInputElement;
    setNewSubject(value);
  };

  const handleAddSubject = () => {
    if (newSubject) {
      const randomId = getRandomString();
      const setSubject = {
        id: randomId,
        name: newSubject,
        grades: []
      };
      const exitsSubject = subjectsState.some(
        ({ name }) => name === newSubject
      );
      if (!exitsSubject) {
        const clone = cloneDeep(student.subjects);
        dispatch(setSubjects([...clone, setSubject]));
      }
    }
  };

  return (
    <form>
      <div className="flex flex-row">
        <InputForm
          typeInput="text"
          labelText="Agregar asignatura"
          name="subject"
          placeHolder="Agrega una asignatura"
          onChange={handleChangeInput}
        />
        <button
          type="button"
          className="btn btn-active mt-6 ml-5"
          onClick={handleAddSubject}>
          <div className="flex items-start">
            <span className="text-xs font-normal md:block">
              Agregar asignatura
            </span>
          </div>
        </button>
      </div>
      {subjectsState.map((item, index) => (
        <Subject {...item} key={item.id} index={index} />
      ))}
    </form>
  );
}

export default DataPersonal;
