import { useSelector } from "react-redux";
import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { TaskList } from "./components/TaskList/TaskList";

const App = () => {
  // const value = useSelector((state) => state.tasks[0].text);
  // const value1 = useSelector((state) => state.tasks[1]);

  return (
    <>
      {/* <div>{value}</div>
      <div>{value1.text}</div> */}
      <StatusFilter />
      <TaskList />
    </>
  );
};

export default App;