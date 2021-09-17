// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';


// export const Home = () => {

//   const { logout, currentUser } = useAuth();
//   const [error, setError] = useState('');


//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       setError('Server Error');
//     }
//   }
  

//   return (
  

//         <div className='logout' >
//           <button onClick={handleLogout} >Log Out</button>
//         </div>


//   )
  
// }