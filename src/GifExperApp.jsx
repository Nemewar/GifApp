import { useState } from "react"


import { AddCategory,GifFrid } from "./components/index.js";

export const GifExperApp = () => {

    let [categories, setCategories] = useState(["One Punch"]);



    const onAddCategory = (category = "") => {
        if (!categories.includes(category) && category.trim() != "") {
            setCategories(c => {
                c = [category, ...c];
                return c;
            })
        }
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map(category =>
                <GifFrid
                    key={category}
                    category={category} />
            )}

        </>
    )
}
