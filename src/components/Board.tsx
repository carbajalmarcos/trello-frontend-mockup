import React, { SyntheticEvent, useState } from "react";
import Card from "./Card";
import List from "./List";
import { todoList, inProgressList, doneList } from "../utils/MockData";
import { ITask } from "../interfaces";
import SimpleDialog from "./DetailsDialog";
import cntl from "cntl";

const boardContainerCN = cntl`
  flex 
  flex-col 
  flex-1 
  gap-4 
  p-4 
`;

interface IListOfLists {
  [key: string]: ITask[];
}

function Board() {
  const [dragged, setDragged] = useState<any>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [currentTask, setCurrentTask] = useState<ITask>();
  const [listOfLists, setListOfLists] = useState<IListOfLists>({
    todoList,
    inProgressList,
    doneList,
  });
  const handleAddNewCard = (title: string, fromList: string) => {
    const listOfListsClone: IListOfLists = structuredClone(listOfLists);
    listOfListsClone[fromList].push({
      title,
      id: new Date().toString(),
      user: {
        avatar: "/avatar.png",
        name: "michael scott",
      },
    });
    setListOfLists(listOfListsClone);
  };
  const handleDrop = (event: any) => {
    const list = event.currentTarget.dataset.id ?? "";
    const listOfListsClone: IListOfLists = structuredClone(listOfLists);
    const newList = listOfListsClone[dragged?.list?.toString()].filter(
      (item) => item.id !== dragged.data.id
    );
    listOfListsClone[dragged.list] = newList;
    listOfListsClone[list].push(dragged.data);
    setListOfLists(listOfListsClone);
  };
  const handleOpenTaskDetails = (task: ITask) => {
    console.log("task", task)
    setCurrentTask(task);
    setShowDialog(true);
  };
  return (
    <div className={boardContainerCN}>
      <div>
        <h1 className="text-2xl font-bold text-white">Development</h1>
      </div>
      <main className="flex flex-1 bg-primary">
        <div className="flex justify-around flex-1 gap-6">
          <List
            title="ToDo"
            handleDrop={handleDrop}
            id="todoList"
            onAdd={handleAddNewCard}
          >
            {listOfLists.todoList.map((item) => (
              <Card
                handleOpenTaskDetails={() => handleOpenTaskDetails(item)}
                comments={item.comments ?? []}
                avatar={item.user.avatar ?? "/avatar.png"}
                id={item.id}
                user={item.user}
                title={item.title}
                key={item.id}
                setDragged={setDragged}
              />
            ))}
          </List>
          <List
            title="In Progress"
            handleDrop={handleDrop}
            id="inProgressList"
            onAdd={handleAddNewCard}
          >
            {listOfLists.inProgressList.map((item) => (
              <Card
                handleOpenTaskDetails={() => handleOpenTaskDetails(item)}
                comments={item.comments ?? []}
                avatar={item.user.avatar ?? "/avatar.png"}
                id={item.id}
                user={item.user}
                title={item.title}
                key={item.id}
                setDragged={setDragged}
              />
            ))}
          </List>

          <List
            title="Done"
            handleDrop={handleDrop}
            id="doneList"
            onAdd={handleAddNewCard}
          >
            {listOfLists.doneList.map((item) => (
              <Card
                handleOpenTaskDetails={() => handleOpenTaskDetails(item)}
                comments={item.comments ?? []}
                avatar={item.user.avatar ?? "/avatar.png"}
                id={item.id}
                user={item.user}
                title={item.title}
                key={item.id}
                setDragged={setDragged}
              />
            ))}
          </List>
        </div>
      </main>
      {showDialog && currentTask && (
        <SimpleDialog onClose={setShowDialog} task={currentTask} />
      )}
    </div>
  );
}

export default Board;
