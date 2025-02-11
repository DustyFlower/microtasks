import {FilterType, MoneyType} from './App.tsx';

type NewComponentType = {
    currentMoney: MoneyType[]
    callBack: (nameButton: FilterType) => void
}
export const NewComponent = ({currentMoney, callBack}: NewComponentType) => {
    return (
        <div>
                <ul>
                    {currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className="buttons">
                    <button onClick={() => callBack('all')}>all</button>
                    <button onClick={() => callBack('ruble')}>rubles</button>
                    <button onClick={() => callBack('dollar')}>dollars</button>
                </div>
        </div>
    );
};