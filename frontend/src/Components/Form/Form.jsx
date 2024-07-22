import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: 'Arial', sans-serif; /* Ensure consistent font-family for all form elements */

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 10px; /* Increased border-radius for a smoother look */
        border: 2px solid #ddd; /* Light gray border for a subtle look */
        background: #ffffff; /* White background for form fields */
        resize: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /* Slightly more pronounced shadow */
        color: #333; /* Darker text color for better readability */
        transition: all 0.3s ease-in-out; /* Smooth transition for hover and focus effects */

        &::placeholder {
            color: #888; /* Gray placeholder text for better contrast */
        }

        &:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15); /* More pronounced shadow on hover */
            border-color: #4caf50; /* Slightly darker border on hover */
        }

        &:focus, &:active {
            color: #000; /* Darker color on focus for better visibility */
            border-color: #4caf50; /* Green border color on focus */
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow on focus */
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            color: #333; /* Dark text color */
            border: 2px solid #ddd; /* Light gray border */
            background: #ffffff; /* White background */
            border-radius: 10px;
            padding: 0.5rem 1rem;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out; /* Smooth transition for focus state */

            &:focus, &:active {
                color: #000; /* Darker color on focus for better visibility */
                border-color: #4caf50; /* Green border color on focus */
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow on focus */
            }
        }
    }

    .submit-btn {
        button {
            background: #4caf50; /* Green background for the button */
            color: #ffffff; /* White text color */
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 10px; /* Match border-radius with form fields */
            font-size: 1rem;
            cursor: pointer;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;

            &:hover {
                background: #388e3c; /* Darker green on hover */
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* More pronounced shadow on hover */
            }
        }
    }
`;
export default Form