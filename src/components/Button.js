// styles
import "@styles/Button.scss";

export const Button = ({ type, onClick, children }) => {
   return (
      <button className="Button" type={type} onClick={onClick}>{children}</button>
   );
};
