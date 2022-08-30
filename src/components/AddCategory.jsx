import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {

    let [inputValue, setInputValue] = useState("")

    const onInputChange = (ev) => {
        setInputValue(i => {
            i = ev.target.value;
            return i;
        })
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (inputValue.trim() !== "") {
            onNewCategory(inputValue);
        }
        setInputValue("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={onInputChange}
                type="text"
                placeholder="Buscar Gifs"
                value = {inputValue}
            />
        </form>
    )
}
