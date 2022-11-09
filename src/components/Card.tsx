import cntl from "cntl";
import Image from "next/image";
import React from "react";
import { Comment, ITask, User } from "../interfaces";

const cardContainerCN = cntl`
  flex 
  flex-col 
  gap-4 
  p-2 
  text-gray-900 
  bg-white 
  rounded-sm
`;
interface iProps {
  comments: Comment[];
  title?: string;
  avatar: string;
  setDragged: (value: object) => void;
  user: User;
  id: string;
  handleOpenTaskDetails: (value: ITask) => void;
}

function Card({
  comments,
  title,
  avatar,
  user,
  id,
  setDragged,
  handleOpenTaskDetails,
}: iProps) {
  const handleDragStart = (event: any) => {
    setDragged({
      data: {
        title,
        user,
        comments,
        id,
      },
      list: event.target.closest("[data-id]").dataset.id,
    });
  };
  return (
    <div
      onDoubleClick={() => handleOpenTaskDetails}
      draggable
      onDragStart={handleDragStart}
      className={cardContainerCN}
    >
      <div className="flex justify-between">
        <p>{title}</p>
        <span>
          <Image src="/edit.svg" width={20} height={20} alt="edit" />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-1">
          <Image src="/comments.svg" width={20} height={20} alt="comments" />
          {comments.length > 0 ? comments.length : null}
        </span>
        <span>
          <Image src={avatar} width={20} height={20} alt="avatar" />
        </span>
      </div>
    </div>
  );
}

export default Card;
