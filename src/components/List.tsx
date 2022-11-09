import cntl from "cntl";
import React from "react";
import AddNewCard from "./AddNewCard";

const listContainerCN = cntl`
  absolute 
  inset-0 
  flex 
  flex-col 
  flex-1 
  gap-4 
  p-4 rounded 
  bg-slate-200
`;

interface iProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  id: string;
  handleDrop: (value: any) => void;
  onAdd: (title: string, id: string) => void;
}

function List({ children, title, handleDrop, id, onAdd }: iProps) {
  const handleDragOver = (
    event: React.DragEventHandler<HTMLDivElement> | any
  ) => {
    event.preventDefault();
  };
  const handleAddNewCard = (title: string) => {
    onAdd(title, id);
  };
  return (
    <div
      className="relative flex-1"
      onDragOver={(event) => handleDragOver(event)}
      onDrop={(event) => handleDrop(event)}
      data-id={id}
    >
      <div className={listContainerCN}>
        <div>
          <h2 className="font-bold text-gray-900">{title}</h2>
        </div>
        <div className="flex flex-col gap-4 overflow-auto">{children}</div>
        <AddNewCard onAdd={handleAddNewCard} />
      </div>
    </div>
  );
}

export default List;
