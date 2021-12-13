// styles
import "../assets/styles/Cell.scss";

export const Cell = ({ onClick }) => {
   return (
      <article
         className="Cell"
         onClick={onClick}
      ></article>
   );
};
