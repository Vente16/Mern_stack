/* eslint-disable */
import { ReactNode } from 'react';

export interface Props {
  id: string;
  title?: string;
  isActive?: boolean;
  content?: ReactNode;
}

function ItemSteper({ title, isActive }: Props) {
  const styles = isActive
    ? 'inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
    : 'inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group';
  return (
    <li className="mr-2">
      <span className={styles}>{title}</span>
    </li>
  );
}
export default ItemSteper;
