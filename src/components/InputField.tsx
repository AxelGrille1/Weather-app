import React, { useRef } from 'react';

interface Props{
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({city, setCity, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className='input'
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
            >
            
            
            <input
            type="text"
            placeholder='Enter a city'
            value={city}
            ref={inputRef}
            onChange={(e) => setCity(e.target.value)}
            className="input__box"
            
            />

            <button type="submit" className='input_submit'>
                Go
            </button>
            </form>
    );
};


export default InputField;