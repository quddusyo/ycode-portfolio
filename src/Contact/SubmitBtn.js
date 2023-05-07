import React, { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const SubmitBtn = ({isPending, setIsPending}) => {
    useEffect(() => {
        setTimeout(() => {
            setIsPending(false);
        }, 2000);
    }
        , [isPending, setIsPending])
    
    const HandleClick = () => {
        if (!isPending) {
            setIsPending(true)
        } else {
            setIsPending(false)
        }
    }
  return (
    <button className='form__submit' onClick={HandleClick}>
        { !isPending ? 'Submit' : 
            <ClipLoader
            color='var(--white)'
            loading={isPending}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        }
     </button>
  )
}

export default SubmitBtn;