import { ITask } from "../interfaces";

export const todoList: ITask[] = [
  {
    title: "Add new cards",
    id: '123',
    user: {
      name: "pepito",
      avatar: "/avatar.png",
    },
    comments: [
      {
        text: "this feature is a priority",
        user: {
          name: "pepito",
          avatar: "/avatar.png",
        },
      },
      {
        text: "Nooo its super easy!",
        user: {
          name: "leonidas",
          avatar: "/avatar.png",
        },
      },
    ],
  },
  {
    title: "Creation of new cards",
    id: '122',
    user: {
      name: "mike",
      avatar: "/avatar.png",
    },
  },
  {
    title: "Add users",
    id: '125',
    user: {
      name: "mike",
      avatar: "/avatar.png",
    },
  },
];

export const inProgressList: ITask[] = [
  {
    title: "Move cards",
    id: '126',
    user: {
      name: "mike",
      avatar: "/avatar.png",
    },
  },
];

export const doneList: ITask[] = [
  {
    title: "Implement design",
    id: '128',
    user: {
      name: "mike",
      avatar: "/avatar.png",
    },
  },
  {
    title: "Responsive design",
    id: '129',
    user: {
      name: "mike",
      avatar: "/avatar.png",
    },
  },
  {
    title: "Columns",
    id: '101',
    user: {
      name: "mike",
      avatar: "/avatar.png",
    },
  },
];
