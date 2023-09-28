import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';
type GoalListProps = {
  coursGoals:{
    text:string
    id:string
  }[]
  onDeleteItem:(goalId:string)=>void
}
const CourseGoalList = ({coursGoals,onDeleteItem}:GoalListProps) => {
  return (
    <ul className="goal-list">
      {coursGoals.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
