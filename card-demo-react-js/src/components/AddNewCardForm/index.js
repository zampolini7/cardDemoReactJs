import { React } from 'react';
import './AddNewCardButton.css'
import { useForm } from '../../hooks/useForm';



const initialForm = {
    name: "",
    kindOfCreditCard: "",
    numberOfCreditCard: "",
    creditCard: "", 
    until: "",
    keyOfSecurity: "",
}

const validationForms = (valueOfForm) =>{


   let errors = {};
   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let regexCounterOfDigits = /^.{16,16}$/;
   let regexCounterOfDigitsOfKey = /^.{3,3}$/;

   let regVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
   let regMastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/; 
   let KindOfCreditCards ;

//    const TYPE_OF_CARDS = {
//     'Mastercard':'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png',
//     'Visa': 'data:image/jpeg;base64,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',
//     'Naranja': 'https://toppng.com/uploads/preview/logo-tarjeta-naranja-115501048913p0sorv6yj.png'
//   }
//   const DEFAULT_CARD = undefined;

//   const nameOfCreditCompany= TYPE_OF_CARDS[creditCard] || DEFAULT_CARD
//   let img = nameOfCreditCompany;
//    American Express: Starting with 34 or 37, length 15 digits.
//    let IsAclientCreditCard = () => {

//    }


// const TYPE_OF_CARDS = {
//     'mastercard':'container-card-mastercard',
//     'visa': 'container-card-visa',
//     'naranja': 'container-card-naranja'
// }
   

   if (!valueOfForm.name.trim()) {
       errors.name= "El campo 'nombre' es requerido."
   }else if (!regexName.test(valueOfForm.name.trim())) {
    errors.name= "El campo 'nombre' solo acepta letras."
   }

   if (!valueOfForm.kindOfCreditCard.trim()) {
    errors.kindOfCreditCard= "*El campo es obligatorio."
   } else if (valueOfForm.kindOfCreditCard.trim().toLowerCase() !== "credito" && valueOfForm.kindOfCreditCard.trim().toLowerCase() !== "debito") {
    errors.kindOfCreditCard= "*Solo se aceptan los valores: Credito o Debito"
   }

   if (!valueOfForm.numberOfCreditCard.trim()) {
    errors.numberOfCreditCard= "*El campo es obligatorio."
   } else if (!regexCounterOfDigits.test(valueOfForm.numberOfCreditCard.trim())) {
    errors.numberOfCreditCard= "*No se aceptan menos de 16 numeros."
   } else if (regMastercard && regVisa) {
       
   }

   if (!valueOfForm.creditCard.trim()) {
    errors.creditCard= "*El campo 'Proovedor' es obligatorio."
   }else if (valueOfForm.creditCard.trim().toLowerCase() !== "mastercard" && valueOfForm.creditCard.trim().toLowerCase() !== "visa" && valueOfForm.creditCard.trim().toLowerCase() !== "naranja") {
    errors.creditCard= "*Solo se aceptan los valores: Mastercard, Visa o Naranja"
   }

   if (!valueOfForm.until.trim()) {
    errors.until= "*El campo 'Vencimiento' es obligatorio."
   }
   
   if (!valueOfForm.keyOfSecurity.trim()) {
    errors.keyOfSecurity= "*El campo es obligatorio.";
   }else if (!regexCounterOfDigitsOfKey.test(valueOfForm.keyOfSecurity.trim())) {
    errors.keyOfSecurity= "*No se aceptan menos de 3 numeros."
   }

   


   return errors
}


const AddNewCardForm = () => {


    const {valueOfForm,
        errors,
        // loading,
        // response,
        handleChange,
        handleBlur,
        handleSubmit,
        // incompletedForm
    } =useForm(initialForm, validationForms)

   
        

    return(             
            <form onSubmit={handleSubmit} className='div-form-add'>
            <h3> Ingrese su nueva tarjeta :) </h3>
            <label htmlFor="">Nombre del titular de la tarjeta</label>
            <input 
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={valueOfForm.name}
                type="text" 
                placeholder='ej: Nicolai Davidenko'
                // required
            />
            {errors.name && <p className='error-message'>{errors.name}</p>}
            <label htmlFor="">Credito o Debito</label>
            <input 
                name='kindOfCreditCard'
                onChange={handleChange}
                onBlur={handleBlur}
                value={valueOfForm.kindOfCreditCard}
                type="text" 
                placeholder='ej: Credito'
                // required
            />
            {errors.kindOfCreditCard && <p className='error-message'> {errors.kindOfCreditCard}</p>}

            <label htmlFor="">Numero de la tarjeta</label>
            <input 
                name='numberOfCreditCard'
                onChange={handleChange}ç
                onBlur={handleBlur}
                value={valueOfForm.numberOfCreditCard}
                type="tel" 
                placeholder='XXXX-XXXX-XXXX-XXXX' 
                maxLength={16} 
                minLength={16}
                // required
            />
            {errors.numberOfCreditCard && <p className='error-message'>{ errors.numberOfCreditCard} </p>}

            <label htmlFor="">Provedor</label>
            <input 
                name='creditCard'
                onChange={handleChange}
                onBlur={handleBlur}
                value={valueOfForm.creditCard}
                type="text" 
                placeholder="Visa, Mastercard, Naranja"
                // required
            />
            {errors.creditCard && <p className='error-message'> {errors.creditCard} </p>}
            
            <label htmlFor="">Vencimiento</label>
            <input 
                name='until'
                onChange={handleChange}
                onBlur={handleBlur}
                value={valueOfForm.until}
                type="text" 
                placeholder='ej: 14/26'
                // required
            />
            {errors.until && <p className='error-message'> {errors.until} </p>}

            <label htmlFor="">Código de seguridad</label>
            <input 
                name='keyOfSecurity'
                type="text" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={valueOfForm.keyOfSecurity}
                placeholder='ej: 161'
                maxLength={3} 
                minLength={3}
                // required
            />
            {errors.keyOfSecurity && <p className='error-message'> { errors.keyOfSecurity} </p>}
            
            
            <button type='submit' > Guarda tu nueva tarjeta </button>
        </form>  




)
}

export { AddNewCardForm }
