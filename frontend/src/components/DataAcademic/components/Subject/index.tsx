/* eslint-disable */
import { FormEvent, useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setSubjects } from '@appRedux/actions/student';
import InputForm from '@components/InputForm';

export interface Props {
  id?: string;
  name: string;
  grades: string[];
  index?: number;
}

function Subject({ name, grades, index }: Props) {
  const dispatch = useAppDispatch();
  const student = useAppSelector(state => state.student);
  const [gradesState, setgradesState] = useState<string[]>([]);
  const [grade, setGrade] = useState('');
  const handleChangeInput = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target as HTMLInputElement;
    setGrade(value);
  };

  useEffect(() => {
    if (student.subjects.length) {
      setgradesState(student.subjects[index || 0].grades);
    }
  }, [student]);

  const handleAddGrade = () => {
    if (grade) {
      const cloneSubjects = cloneDeep(student.subjects);
      const cloneSubject = cloneDeep(student.subjects[index || 0]);
      cloneSubject.grades = [...(cloneSubject.grades || []), grade];
      cloneSubjects[index || 0] = cloneSubject;
      dispatch(setSubjects(cloneSubjects));
    }
  };

  const handleDeleteGrade = (indexGrade: number) => {
    const cloneSubjects = cloneDeep(student.subjects);
    const cloneSubject = cloneDeep(student.subjects[index || 0]);
    cloneSubject.grades = cloneSubject.grades.filter(
      (_, i) => i !== indexGrade
    );
    cloneSubjects[index || 0] = cloneSubject;
    dispatch(setSubjects(cloneSubjects));
  };

  const handleDeleteSubject = () => {
    const cloneSubjects = cloneDeep(student.subjects);
    const newSubjects = cloneSubjects.filter((_, i) => i !== index);
    dispatch(setSubjects(newSubjects));
  };

  return (
    <div
      tabIndex={index}
      className="border border-base-300 bg-base-100 rounded-box m-5">
      <div className="collapse-title text-xl font-medium">
        {name}
        <button
          className="btn btn-ghost ml-2"
          type="button"
          onClick={handleDeleteSubject}>
          Eliminar
        </button>
        <div className="flex flex-row">
          <InputForm
            typeInput="text"
            name="grade"
            placeHolder="Valor nota"
            onChange={handleChangeInput}
          />
          <button
            type="button"
            className="btn btn-active mt-6 ml-5"
            onClick={handleAddGrade}>
            <div className="flex items-start">
              <span className="text-xs font-normal md:block">Agregar nota</span>
            </div>
          </button>
        </div>
        <ul className="list-none">
          {gradesState.map((gradeValue, indexGrade) => (
            <li key={`${indexGrade}_`}>
              <span>
                {gradeValue}
                <button
                  className="btn btn-ghost ml-2"
                  type="button"
                  onClick={() => handleDeleteGrade(indexGrade)}>
                  Eliminar
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Subject;
