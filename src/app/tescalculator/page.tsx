"use client";
import { useState } from 'react';

const Calculator = () => {
    const [inputan, setinputan] = useState('');
    const [hasil, sethasil] = useState('');

    const handleklik = (value: string) => {
        setinputan((previnput) => previnput + value);
    };
    const handleHasil = () => {
        sethasil(eval(inputan).toString());
    };
    const reset = () => {
        setinputan('');
        sethasil('');
    };

    return (
        <div className='w-full h-screen px-52 py-24'>
            <div className='flex w-full h-[350px] '>
                <div className='px-12 py-8 bg-slate-200 rounded-md shadow-xl '>
                    <div className='w-14 h-7'>
                        <input type="text" value={inputan} readOnly />
                    </div>
                    <div className='flex gap-2 pt-1'>
                        <button
                            onClick={() => handleklik('7')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            7</button>
                        <button
                            onClick={() => handleklik('8')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            8</button>
                        <button
                            onClick={() => handleklik('9')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            9</button>
                        <button
                            onClick={() => handleklik('/')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>

                            /</button>
                    </div>

                    <div className='flex gap-2 pt-1'>
                        <button
                            onClick={() => handleklik('4')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            4</button>
                        <button
                            onClick={() => handleklik('5')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            5</button>
                        <button
                            onClick={() => handleklik('6')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            6</button>
                        <button
                            onClick={() => handleklik('*')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            *</button>
                    </div>
                    <div className='flex gap-2 pt-1'>
                        <button
                            onClick={() => handleklik('1')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            1</button>
                        <button
                            onClick={() => handleklik('2')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            2</button>
                        <button
                            onClick={() => handleklik('3')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            3</button>
                        <button
                            onClick={() => handleklik('-')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            -</button>
                    </div>
                    <div className='flex gap-2 pt-1'>
                        <button
                            onClick={() => handleklik('0')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            0</button>
                        <button
                            onClick={() => handleklik('.')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            .</button>
                        <button
                            onClick={handleHasil}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            =</button>
                        <button
                            onClick={() => handleklik('+')}
                            className='bg-slate-400 px-2 py-2 rounded-lg'>
                            +</button>
                        <div>
                            <button onClick={reset}
                                className='bg-slate-400 px-2 py-2 rounded-lg shadow-xl pl-2'>
                                C</button>
                        </div>
                    </div>
                    <div>
                        <input type="text" value={hasil} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
