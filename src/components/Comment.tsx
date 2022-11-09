import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Comment } from "../interfaces";
import cntl from "cntl";

const commentContainerCN = cntl`
  flex 
  items-center 
  gap-2 
  text-lg 
  font-semibold
`;

const inputCN = cntl`
  w-full 
  px-4 
  py-2 
  text-base 
  font-light 
  bg-white 
  rounded
`;

function Comment({ text, user: { avatar, name } }: Comment) {
  return (
    <div className={commentContainerCN}>
      {/* <div className="relative flex flex-col justify-start h-full "> */}
      {/* </div> */}{" "}
      <div className="flex flex-col w-full ">
        <div className="flex items-center gap-2 ">
          <div>
            <Image
              src={avatar}
              alt="avatar comment"
              width={40}
              height={40}
              className=""
            />
          </div>
          <h1 className="text-base ">{name}</h1>
          <p className="text-sm font-normal text-slate-500">3 hours ago</p>
        </div>
        <div className="flex gap-3">
          <div className="w-10 " />
          <div className="flex flex-col w-full gap-2">
            <input disabled type="text" className={inputCN} value={text} />
            <p className="text-sm font-normal text-gray-500 underline ">
              <Link href={""}>Responder</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
