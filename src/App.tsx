import './App.css'
import {useState} from 'react';
import {NewComponent} from './NewComponent.tsx';

export type FilterType = 'all' | 'dollar' | 'ruble';

export type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}

function App() {
    const money: MoneyType[] = [
        {banknote: 'dollar', nominal: 100, number: 'a123456789'},
        {banknote: 'dollar', nominal: 50, number: 'b123456789'},
        {banknote: 'ruble', nominal: 100, number: 'c123456789'},
        {banknote: 'dollar', nominal: 100, number: 'd123456789'},
        {banknote: 'dollar', nominal: 50, number: 'e123456789'},
        {banknote: 'ruble', nominal: 100, number: 'f123456789'},
        {banknote: 'dollar', nominal: 50, number: 'j123456789'},
        {banknote: 'ruble', nominal: 50, number: 'h123456789'}
    ]

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble');
    }
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">
            <NewComponent currentMoney={currentMoney} callBack={onClickFilterHandler} />
        </div>
    );
}

export default App
