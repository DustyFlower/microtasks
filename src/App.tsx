import './App.css'
import {useState} from 'react';
import {NewComponent} from './NewComponent.tsx';

export type MoneyType = {
    banknots: 'Dollars' | 'RUBLS'
    value: number
    number: string
}

export type FilterValueType = 'ALL' | 'Dollars' | 'RUBLS'

function App() {
    const money: MoneyType[] = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'}
    ]

    const [filter, setFilter] = useState<FilterValueType>('ALL');

    const currentMoney = () => {

        if (filter === 'ALL') {
            return money
        }
        return money.filter(filteredMoney => filteredMoney.banknots === filter);
    }

    const onClickFilterHandler = (nameButton: FilterValueType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>
    );
}

export default App
