import React, { useState } from 'react';
import NumberSelector from './NumberSelector';
import DrawButton from './DrawButton';
import ResultDisplay from './ResultDisplay';

const Lottery: React.FC = () => {
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
    const [isDrawn, setIsDrawn] = useState(false);

    const handleNumberSelection = (number: number) => {
        if (!selectedNumbers.includes(number) && selectedNumbers.length < 6) {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const handleDraw = () => {
        const newWinningNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 49) + 1);
        setWinningNumbers(newWinningNumbers);
        setIsDrawn(true);
    };

    return (
        <div>
            <h1>Lotería</h1>
            <NumberSelector selectedNumbers={selectedNumbers} onSelectNumber={handleNumberSelection} />
            <DrawButton onDraw={handleDraw} />
            {isDrawn && <ResultDisplay selectedNumbers={selectedNumbers} winningNumbers={winningNumbers} />}
        </div>
    );
};

export default Lottery;
