import React, { useState } from "react";
import Image from "next/image";
import cntl from "cntl";

const addButtonCN = cntl`
  p-2
  text-sm
  text-white 
  bg-blue-500 
  rounded
`;
const addButtonContainerCTNL = cntl`
  flex 
  items-center 
  justify-start 
  w-full 
  gap-4
`;
const addInputContainerCN = cntl`
  flex 
  flex-col 
  items-center 
  gap-4
`;
const inputCN = cntl`
  w-full 
  p-2 
  text-base 
  font-normal 
  rounded 
`;
interface IProp {
  onAdd: (value: string) => void;
}

function AddNewCard({ onAdd }: IProp) {
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState("");
  const handleCloseEdit = () => {
    setShowEdit(false);
    setTitle("");
  };

  const handleAdd = () => {
    setShowEdit(false);
    setTitle("");
    onAdd(title);
  };
  if (!showEdit)
    return (
      <div className="flex items-center gap-2">
        <Image
          onClick={() => {
            setShowEdit(true);
          }}
          draggable={false}
          src="/plus.svg"
          alt="add task"
          width={24}
          height={24}
          className="cursor-pointer "
        />
        Add new card
      </div>
    );
  return (
    <div className={addInputContainerCN}>
      <input
        type="text"
        className={inputCN}
        placeholder="Introduce the title for this card..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <div className={addButtonContainerCTNL}>
        <div>
          <input
            type="button"
            value="Add card"
            className={addButtonCN}
            onClick={handleAdd}
          />
        </div>
        <Image
          onClick={handleCloseEdit}
          src="/close.svg"
          alt="close add card"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

export default AddNewCard;
