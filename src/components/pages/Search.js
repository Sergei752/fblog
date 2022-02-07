// import React, { useState } from 'react';
// import Home from './Home';

// function Search({ data }) {

//   const [searchField, setSearchField] = useState("");

//   const filteredPosts = data.filter(
//     post => {
//       return (
//         post
//         .anons
//         .toLowerCase()
//         .includes(searchField.toLowerCase()) 
//         // ||
//         // post
//         // .title
//         // .toLowerCase()
//         // .includes(searchField.toLowerCase())
//       );
//     }
//   );

//   const handleChange = e => {
//     setSearchField(e.target.value);
//   };

//   return (
//     <form className="navbar-form navbar-right" role="search">
//         <div className="form-group">
//         <input type="text" 
//                 className="form-control" 
//                 placeholder="Найти" 
//                 onChange = {handleChange} />
//         </div>
//     </form>
//   );
// }

// export default Search;