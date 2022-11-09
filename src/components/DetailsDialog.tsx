import cntl from "cntl";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ITask } from "../interfaces";
import Comment from "./Comment";

const detailsDialgoContainerOverlayCN = cntl`
  absolute 
  top-0 
  z-50 
  flex 
  items-center 
  justify-center 
  w-full 
  h-full 
  bg-black 
  bg-opacity-70
`;

const detailsDialogContainerCN = cntl`
  relative 
  flex 
  flex-col 
  w-3/5 
  max-w-3xl 
  gap-4 
  p-4 
  mx-auto 
  my-6 
  overflow-auto 
  rounded 
  h-3/5 
  bg-slate-100
`;

const descriptionContainerCN = cntl`
  flex 
  flex-col 
  gap-2 
  text-base 
  font-bold`;

const descriptionInputCN = cntl`
  w-full 
  p-4 
  text-base 
  font-normal 
  rounded 
  bg-slate-200
`;

const addCommentInputCN = cntl`
  w-full 
  px-4 
  py-2 
  text-base 
  border 
  rounded 
  font-base
`;

interface IProps {
  task: ITask;
  onClose: (value: boolean)=>void;
}

function DetailsDialog({ task, onClose }: IProps) {
  const { title, comments } = task;
  const handleClose = () => {
    onClose(false);
  };

  return (
    <div
      onClick={() => {
        onClose(false);
      }}
      className={detailsDialgoContainerOverlayCN}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={detailsDialogContainerCN}
      >
        <div className="flex justify-between">
          <h1 className="text-base font-bold text-black ">{title}</h1>
          <Image
            src="/close.svg"
            alt="close modal"
            width={24}
            height={24}
            onClick={handleClose}
          />
        </div>
        {/* description */}
        <div className={descriptionContainerCN}>
          <h1>Description</h1>
          <input
            type="text"
            className={descriptionInputCN}
            placeholder="Add a description..."
          />
        </div>
        {/* add comment */}
        <div className="flex gap-2 pb-4">
          <Image
            src="/avatar.png"
            width={40}
            height={40}
            alt="avatar comment"
          />
          <input
            type="text"
            className={addCommentInputCN}
            placeholder="Write a comment..."
          />
        </div>
        {comments?.map((comment, index) => (
          <Comment
            text={comment?.text}
            user={comment?.user}
            key={`comment-key-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DetailsDialog;
