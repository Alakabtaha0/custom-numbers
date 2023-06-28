import React, { useEffect } from 'react';

export default function Input({ setNumberDigits, numberDigits, numOfDigits }) {

    const handleChange = (e) => {

        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split('-');

        //Get Current index of the input field
        let fieldIntIndex = parseInt(fieldIndex, 10);

        //Check if no of characters in the field == maxLength
        if (value.length >= maxLength) {
            //Check if its the last input field
            if (fieldIntIndex <= 6) {
                //Get the next input field using its name
                const nextField = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                );

                if (nextField !== null) {
                    nextField.focus();
                }
            }
        }
    }


    const handleBackSpace = (e) => {
        const { name } = e.target;
        const [fieldName, fieldIndex] = name.split('-');

        let fieldIntIndex = parseInt(fieldIndex, 10);

        //Key Press of backspace
        if (e.key === 'Backspace') {
            if (numOfDigits === 1) {
                //Check if current input field is less than the max number of input fields
                if (fieldIntIndex <= 7) {
                    const prevField = document.querySelector(
                        `input[name=field-${fieldIntIndex - 1}]`
                    );

                    //Check if its the first input field so you can't go back
                    if (prevField !== null) {
                        prevField.focus();
                    }
                }
            } else {
                //Check if current input field is less than the max number of input fields
                if (fieldIntIndex <= 6) {
                    const prevField = document.querySelector(
                        `input[name=field-${fieldIntIndex - 1}]`
                    );

                    //Check if its the first input field so you can't go back
                    if (prevField !== null) {
                        prevField.focus();
                    }
                }
            }

        }
    }

    //Log Value so we can display it
    const logValue = (e) => {
        const { name } = e.target;
        const [fieldName, fieldIndex] = name.split('-');
        let currentPosition = parseInt(fieldIndex, 10) - 1;

        if (numberDigits !== null) {
            if (numOfDigits === 7) {
                //Check if you should append or change the value;
                if (numberDigits.length < 6) {
                    numberDigits.push(e.target.value);
                } else {
                    const copy = numberDigits.slice();
                    copy[currentPosition] = e.target.value;
                    setNumberDigits(copy);
                }
            } else {
                //Check if you should append or change the value;
                if (numberDigits.length < 5) {
                    numberDigits.push(e.target.value);
                } else {
                    const copy = numberDigits.slice();
                    copy[currentPosition] = e.target.value;
                    setNumberDigits(copy);
                }
            }


        }
    }

    const removeValue = (e) => {
        const { name } = e.target;
        const [fieldName, fieldIndex] = name.split('-');
        if (e.key === 'Backspace') {
            const copyOfNumberDigits = numberDigits.slice();
            setNumberDigits(copyOfNumberDigits);
        }
    }





    return (
        <div className='reset-bg'>
            <InputFild type='text' length='1' name='field-1' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />
            <InputFild type='text' length='1' name='field-2' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />
            <InputFild type='text' length='1' name='field-3' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />
            <InputFild type='text' length='1' name='field-4' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />
            <InputFild type='text' length='1' name='field-5' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />
            <InputFild type='text' length='1' name='field-6' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />
            {numOfDigits === 7 && <InputFild type='text' length='1' name='field-7' handleChange={(e) => { handleChange(e); logValue(e) }} handleBackSpace={(e) => { handleBackSpace(e); removeValue(e); }} />}
        </div>
    )

}

class InputFild extends React.Component {
    render() {
        return (
            <input type='text'
                className='input-spacing input-design'
                name={this.props.name}
                maxLength={this.props.length}
                onChange={this.props.handleChange} /** So it moves to the next field */
                onKeyUp={this.props.handleBackSpace} /** So it deletes the current field*/ />
        )
    }
}