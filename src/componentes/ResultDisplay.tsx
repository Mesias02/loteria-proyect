import React from 'react';

interface ResultDisplayProps {
    selectedNumbers: number[];
    winningNumbers: number[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ selectedNumbers, winningNumbers }) => {
    const matches = selectedNumbers.filter((num) => winningNumbers.includes(num));
    const hasWon = matches.length > 0;

    return (
        <div>
            <h2>Resultados del Sorteo</h2>
            <p>Números Ganadores: {winningNumbers.join(', ')}</p>
            <p>Números Seleccionados: {selectedNumbers.join(', ')}</p>
            {hasWon ? (
                <p>¡Felicidades! Has acertado en {matches.length} número(s).</p>
            ) : (
                <p>No has acertado en ningún número. ¡Inténtalo de nuevo!</p>
            )}
        </div>
    );
};

export default ResultDisplay;
