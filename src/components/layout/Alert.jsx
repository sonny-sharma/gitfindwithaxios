import React, { useContext } from 'react';
import { FiAlertCircle } from "react-icons/fi";
import AlertContext from '../../context/alert/AlertContext';


const Alert = () => {
  const {alert} = useContext(AlertContext)
  return (
    <>
      {
       alert!== null && (
         <>
         <div className="flex mt-4 ml-12 text-center text-gray-300 js">
         <div>

         <FiAlertCircle className="mt-1 mr-4 space-x-6"/>
         </div>
         <div>
           {alert.msg}

         </div>
         </div>
         </>
       )
      }
    </>
  )
}

export default Alert