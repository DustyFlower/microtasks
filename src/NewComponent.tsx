import {FilterValueType, MoneyType} from './App.tsx';

type NewComponentPropsType = {
    currentMoney: () => MoneyType[]
    onClickFilterHandler: (filter: FilterValueType) => void
}

export const NewComponent = ({currentMoney, onClickFilterHandler}: NewComponentPropsType) => {
    return (
        <div className="App">
            <ul>
                {currentMoney().map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={'buttons'}>
                <button onClick={() => onClickFilterHandler('ALL')}>ALL</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLES</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>DOLLARS</button>
            </div>
        </div>
    );
};