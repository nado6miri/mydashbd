import React from 'react';
/*
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
*/
import '../styling/TableHeader.scss';

const TableHeader_Ex = () => {
  const columns = ['No', 'Jira-ID', 'Summary', 'Assignee', 'DueDate'];
  const columnsList = columns.map((col) => <div className={col}>{col}</div>);

  return <div className="TableHeader_Ex">{columnsList}</div>;
};

export default TableHeader_Ex;
