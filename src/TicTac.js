import React, { useState, useReducer } from 'react';

var winningCombos = ["012", "345", "678", "036", "147", "258", "048", "246"];

var initialState = {
    fields: Array(9).fill(false), // start with array of 9 with false filled in
    player1: "x",
    player2: "o",
    currentPlayer: 1,
    score: {
        x: 0,
        o: 0
    }
};

function reducer(state, action) {
    switch (action.type) {
        case "HANDLE_PLAY":
            if (state.winner) return state;

            var fields = [...state.fields];
            var score = {...score};
            var piece = state["player" + state.currentPlayer]; //x or o
            fields[action.data.index] = piece;
            
            return {
                ...state,
                fields,
                currentPlayer: state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
            };

        case "RESET":
            return {
                ...initialState,
                currentPlayer: state.currentPlayer
            };
        case "HANDLE_FLIP":
            var fields = state.fields.map((item) => {
                if (item === 'x') return 'o';
                if (item === 'o') return 'x';
                return item
            })
            return {
                ...state,
                fields: fields,
            };
        default:
            //throw new Error()
            return state;
    }
}

const TicTac = function () {

    var [currState, dispatch] = useReducer(reducer, initialState);

    function handleRestart() {
        dispatch({ type: "RESET" });
    }

    function handlePlay(index, e) {
        // fill in the current piece, and switch player
        dispatch({ type: "HANDLE_PLAY", data: { index } });
    }

    var handleFlip = () => {
        dispatch({ type: "HANDLE_FLIP" });
    }

    var fields = currState.fields.map((item, i) => {
        if (!item) {
            return (
                <div key={i} onClick={handlePlay.bind(this, i)} className="field empty">
                    &nbsp;
                </div>
            );
        }

        return (
            <div key={i} className="field">
                {item.toUpperCase()}
            </div>
        );
    });

    return (
        <div>
            <button className="clearButton" onClick={handleRestart}>
                Clear
          </button>
            <button className="clearButton" onClick={handleFlip}>
                Flip Values
          </button>
            <div className="fieldContainer">{fields}</div>
            <div>ScoreBoard:<br/>Player 'x' score is: {currState.score.x}<br/>Player 'o' score is: {currState.score.o}</div>
        </div>
    );
}

export default TicTac;