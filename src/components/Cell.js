// styles
import "../assets/styles/Cell.scss";

export const Cell = ({ onClick, index }) => {
   return (
      <article
         className="Cell"
         onClick={() => onClick(index)}
      ></article>
   );
};
