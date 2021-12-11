// libraries and hooks
import { createContext, useContext } from "react";
// algorithm
import { GameContext } from "@context/GameContext";

export const MinimaxContext = createContext();

export const MinimaxContextProvider = ({ children }) => {
   const AIMark = "O";
   const humanMark = "X";

   const { findEmptyCells, checkWinner } = useContext(GameContext);

   const findBestMove = (board, playerMark) => {
      // the algorithm gets the indexes of all the empty cells.
      const availableCells = findEmptyCells(board);

      // the algorithm checks whether someone has already won.
      if (checkWinner(board, humanMark)) {
         // if the human wins, then return -1
         return { score: -1 };
      } else if (checkWinner(board, AIMark)) {
         // if the AI wins, then return 1
         return { score: 1 };
      } else if (availableCells.length === 0) {
         // finally, if there are no more available cells, it means the game has ended in a tie, therefore return 0.
         return { score: 0 };
      }

      // this array will save the information of all the tests.
      const allTestsInformation = [];

      for (let i = 0; i < availableCells.length; i++) {
         // now we will iterate upon all the available cells.
         const currentTestInfo = {}; //this variable saves the info of the current test.
         currentTestInfo.index = board[availableCells[i].index].index;
         // then we will place the player mark in the current available cell.
         board[availableCells[i].index].isMarked = true;
         board[availableCells[i].index].markedBy = playerMark;
         //is the AI the current player?
         if (playerMark === AIMark) {
            //if so, recursively run the algorithm with the new board state and with the humanMark (the next player) and save its result in the result variable.
            const result = findBestMove(board, humanMark);
            // and add this result info to the currentTestInfo object.
            currentTestInfo.score = result.score;
         } else {
            //else, recursively run the algorithm with the new board state and with the AImark (the next player) and save its result in the result variable.
            const result = findBestMove(board, AIMark);
            // and add this result info to the currentTestInfo object.
            currentTestInfo.score = result.score;
         }
         // now delete the player mark from the current cell.
         board[availableCells[i].index].isMarked = false;
         board[availableCells[i].index].markedBy = null;
         // and push the currentTestInfo to the array with all the tests.
         allTestsInformation.push(currentTestInfo);
      }

      // this is the variable that we will return later on.
      let bestPlay = null;

      // is the AI (the maximizer) the current player?
      if (playerMark === AIMark) {
         // if so, then:
         let bestScore = -9999999; //the best score is initialized with a negative number.
         for (let i = 0; i < allTestsInformation.length; i++) {
            //we'll iterate upon the array with all the tests.
            if (allTestsInformation[i].score > bestScore) {
               // if the score of the test at i position is greater than bestScore, then:
               // bestScore will change its value to the score of the test at position i.
               bestScore = allTestsInformation[i].score;
               // and the best play for the maximizer will be equal to the test at i position.
               bestPlay = i;
            }
         }
      } else {
         // else, it means the current player is the human (the minimizer)
         let bestScore = 9999999; // for the minimizer, we'll start its best value as a positive number.
         for (let i = 0; i < allTestsInformation.length; i++) {
            //we'll iterate upon the array with all the tests.
            if (allTestsInformation[i].score < bestScore) {
               // if the score of the test at i position is lesser than bestScore, then:
               // bestScore will change its value to the score of the test at position i.
               bestScore = allTestsInformation[i].score;
               // and the best play for the minimizer will be equal to the test at i position.
               bestPlay = i;
            }
         }
      }
      // finally, return the best play found in the tests array.
      return allTestsInformation[bestPlay];
   };

   return (
      <MinimaxContext.Provider value={{ findBestMove }}>
         {children}
      </MinimaxContext.Provider>
   );
};