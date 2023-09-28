import { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';
type CourseInputProps = {
  onAddGoal:(text:string)=>void
}
const CourseInput = ({onAddGoal}:CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid,setValid]=useState(true);
  const goalInputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length > 0)
      setValid(true);
    console.log(event.target.value)
    setEnteredValue(event.target.value);
}
  const formSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length == 0){
      setValid(false);
      return
    }
    console.log(enteredValue)
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!valid?styles['valid']:''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
