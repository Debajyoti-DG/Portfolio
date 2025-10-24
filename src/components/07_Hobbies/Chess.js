// src/components/07_Hobbies/Chess.js

import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import './Chess.css';
const { Game } = require('js-chess-engine');

const ChessGame = () => {
    const [game, setGame] = useState(new Game());
    const [status, setStatus] = useState("Choose your side to begin.");
    const [playerColor, setPlayerColor] = useState(null);
    const [boardOrientation, setBoardOrientation] = useState('white');
    const [isGameStarted, setIsGameStarted] = useState(false);

    // THIS FUNCTION IS MODIFIED
    const makeEngineMove = (currentGame) => {
        setStatus("Debajyoti is thinking...");
        try {
            const gameCopy = new Game(currentGame.exportFEN());
            const gameState = gameCopy.exportJson();

            // **NEW LOGIC: Force the AI's first move**
            // Check if it's the first full move of the game.
            if (gameState.fullMove === 1) {
                if (gameState.turn === 'white') {
                    // If AI is White, its first move is d4.
                    gameCopy.move('d2', 'd4');
                } else if (gameState.turn === 'black') {
                    // If AI is Black, its first move is e5.
                    gameCopy.move('e7', 'e5');
                }
            } else {
                // For all other moves, use the regular AI.
                gameCopy.aiMove();
            }

            setGame(gameCopy);

            // Update status after the move
            const newGameState = gameCopy.exportJson();
            if (newGameState.isFinished) {
                setStatus(newGameState.checkMate ? "Checkmate! Good game." : "Stalemate! Game over.");
            } else {
                setStatus("It's your turn.");
            }
        } catch (error) {
            console.error("Oops, I cannot make a move:", error);
            setStatus("I could not find a move. Game might be over.");
        }
    };

    const onDrop = (sourceSquare, targetSquare) => {
        const gameState = game.exportJson();
        if (gameState.turn !== playerColor || gameState.isFinished) {
            return false;
        }

        try {
            const gameCopy = new Game(game.exportFEN());
            gameCopy.move(sourceSquare, targetSquare);
            setGame(gameCopy);

            const newGameState = gameCopy.exportJson();
            if (newGameState.isFinished) {
                setStatus(newGameState.checkMate ? "Checkmate! You win!" : "Stalemate!");
                return true;
            }
            setTimeout(() => makeEngineMove(gameCopy), 500);
            return true;

        } catch (error) {
            console.warn("Invalid move attempted:", error.message);
            return false;
        }
    };

    const handleStartGame = (color) => {
        setPlayerColor(color);
        setBoardOrientation(color);
        setIsGameStarted(true);
        const newGame = new Game();
        setGame(newGame);

        if (color === 'black') {
            makeEngineMove(newGame);
        } else {
            setStatus("You are White. Make your move.");
        }
    };

    const handleNewGame = () => {
        setIsGameStarted(false);
        setPlayerColor(null);
        setBoardOrientation('white');
        setStatus("Choose your side to begin.");
    }

    return (
        <div className="chess-container">
            {!isGameStarted ? (
                <div className="color-selection">
                    <h3>{status}</h3>
                    <div className="button-group">
                        <button onClick={() => handleStartGame('white')}>Play as White</button>
                        <button onClick={() => handleStartGame('black')}>Play as Black</button>
                    </div>
                </div>
            ) : (
                <>
                    <p className="game-status">{status}</p>
                    <div className="board-wrapper">
                        <Chessboard
                            position={game.exportFEN()}
                            onPieceDrop={onDrop}
                            boardOrientation={boardOrientation}
                        />
                    </div>
                    <div className="chess-controls">
                        <button onClick={() => setBoardOrientation(p => p === 'white' ? 'black' : 'white')}>Flip Board</button>
                        <button onClick={handleNewGame}>New Game</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChessGame;