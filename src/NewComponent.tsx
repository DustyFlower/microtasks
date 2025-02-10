import {StudentType} from './App.tsx';

type NewComponentType = {
    students: StudentType[]
}

type CarType = {
    manufacturer: string,
    model: string
}

export const NewComponent = ({students}: NewComponentType) => {

    const topCars: CarType[] = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <>
            <table>

                {
                    topCars.map((car: CarType, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <th>{car.manufacturer}</th>
                            <th>{car.model}</th>
                        </tr>
                    ))
                }

            </table>

            <ul>

                {students.map(student => {
                    return (
                        <li key={student.id}>
                            <span>Name: {student.name}</span>
                            <span>Age: {student.age}</span>
                        </li>
                    )
                })}

            </ul>
        </>


    );
};