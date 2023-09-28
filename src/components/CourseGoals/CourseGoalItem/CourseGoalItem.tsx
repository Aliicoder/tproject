import './CourseGoalItem.css';
type GoalItemProps = {
  key: string
  id: string
  children:React.ReactNode
  onDelete:(goalId:string)=>void
}
const CourseGoalItem = ({id,children,onDelete}:GoalItemProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};
export default CourseGoalItem

