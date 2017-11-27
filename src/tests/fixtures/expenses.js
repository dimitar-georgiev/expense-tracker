/**
 * Created by Mitaka on 25-Nov-17.
 */
import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'Test Description Edno',
        amount: 0,
        note: '',
        createdAt: 0
    },
    {
        id: 2,
        description: 'Test Description Dve',
        amount: 787,
        note: 'Test 2 Note',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        description: 'Test Description Tri',
        amount: 147,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export default expenses;