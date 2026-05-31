import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task Statistics</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Remaining Tasks: {remaining}</p>
    </div>
  );
};

export default Stats;
