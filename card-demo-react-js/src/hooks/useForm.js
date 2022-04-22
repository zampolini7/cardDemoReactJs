import { useState } from 'react';
import { useContext } from "react";
import { CardContext } from "../components/CardContext";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const useForm = (initialForm, validationForms)=> {
    
    const [valueOfForm, setValueOfForm] = useState (initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [incompletedForm, setIncompletedForm] = useState(false);



    const {
        addFunction
    } = useContext(CardContext);

   
    const handleChange = (e) =>{
        const {name, value }= e.target
        setValueOfForm({
            ...valueOfForm,
            [name]:value
            
        })      
            
        console.log(valueOfForm);
 
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validationForms(valueOfForm))

    }
    
    // let history = useHistory();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        let errorsLength = Object.keys(errors).length
        console.log(errorsLength);

        // if (errors.valueOf.length === 0) {
        if (valueOfForm !== initialForm && errorsLength === 0){  
            e.preventDefault()
            console.log(errors.valueOf.length);
            console.log(valueOfForm);
            console.log('to el que lee');
            addFunction(valueOfForm)
            // setRedirect(true)
            // history.push("/");          
            navigate('/');
            
            
        } else {
            console.log('Completa el formulario correctamente.');
            e.preventDefault()
            console.log(valueOfForm);
            // setIncompletedForm(true)
            
        }
    }



    return {
        addFunction,
        valueOfForm,
        errors,
        loading,
        response,
        handleChange,
        setValueOfForm,
        handleBlur,
        handleSubmit,
        initialForm,
        incompletedForm
        
        
    }
}

