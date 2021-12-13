// styles
import "@styles/Button.scss";

export const Button = (props) => {
   return (
      <button className="Button" {...props}>{props.children}</button>
   );
};
