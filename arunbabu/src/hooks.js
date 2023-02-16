import React,{useState} from "react";

function useToggle(initialValue){
    const [value,setValue] = useState()
    const toggleValue = () => setValue(!value)
    return [value, toggleValue]
}

export {useToggle}