// styles
import "../assets/styles/Cell.scss";

export const Cell = ({ onClick, index, markedBy }) => {
   return (
      <article
         className={`Cell ${markedBy ? markedBy : "notMarked"}`}
         onClick={() => onClick(index)}
      ></article>
   );
};
