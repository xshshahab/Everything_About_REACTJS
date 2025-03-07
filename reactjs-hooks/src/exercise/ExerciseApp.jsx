import React from 'react';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import Timer from './components/Timer';
import CheckboxGroup from './components/CheckboxGroup';

const ExerciseApp = () => {
    return (
        <section>
            <span className='text-xl py-2.5 my-2 font-extrabold text-green-500'>1: <Counter /></span>
            <span className='text-xl py-2.5 my-2 font-extrabold text-blue-500'>
                2:
                <>
                    <FocusInput />
                    <Timer />
                </>
            </span>
            <span className='text-xl py-2.5 my-2 font-extrabold text-red-500'>3: <CheckboxGroup /></span>
        </section>
    );
}

export default ExerciseApp;