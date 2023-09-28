import styles from './Button.module.css';
type ButtonProps = {
  children:React.ReactNode
  type: "submit"
}
const Button = ({children,type}:ButtonProps) => {
  return (
    <button type={type} className={styles['button']} >
      {children}
    </button>
  );
};

export default Button;
