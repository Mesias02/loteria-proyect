import React from 'react';

interface NumberSelectorProps {
    selectedNumbers: number[];
    onSelectNumber: (number: number) => void;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({ selectedNumbers, onSelectNumber }) => {
    return (
        <div>
            <h2>Selecciona tus números (5 en total):</h2>
            <div className="number-grid">
                {Array.from({ length: 49 }, (_, i) => i + 1).map((number) => (
                    <button
                        key={number}
                        onClick={() => onSelectNumber(number)}
                        disabled={selectedNumbers.includes(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NumberSelector;
