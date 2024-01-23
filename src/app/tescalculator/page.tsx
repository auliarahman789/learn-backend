"use client";
import { useState } from 'react';

const AdditionForm = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        const sum = Number(num1) + Number(num2);
        setResult(sum.toString());
    };
    return (
        <div>
            <div className='w-full h-screen px-52 py-24'>
                <div className='flex w-4/12 h-full bg-slate-500 shadow-xl rounded-xl px-8 py-12'>
                    <div>
                        <input
                            className='w-7 h-7'
                            type="number"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                        />
                    </div>
                    <span className='text-white font-semibold'> + </span>
                    <div>
                        <input
                            className='w-7 h-7'
                            type="number"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                        />
                    </div>
                    <div className='pl-1'>
                        <button className='bg-slate-300  shadow-xl px-2  text-xl font-semibold text-white'
                            onClick={handleAddition}>
                            =
                        </button>
                    </div>
                    <div className='pl-1'>
                        <label className='text-white'>
                            {result !== null && <div> <a className='text-xl font-semibold'>Result: {result}</a></div>}
                        </label>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdditionForm;