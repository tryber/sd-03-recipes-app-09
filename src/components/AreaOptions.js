// import React from "react";

// export default function AreaOptions(props) {
//   const { strArea } = props;
//   return (
//     <select>
//     <option value="All">All</option>
//     {mealsData.map(({ strArea }) => {
//       return (
//         <option key={strArea} value={strArea}>
//           {strArea}
//         </option>
//       );
//     })}
//   </select>;
//   )
// }

// [...new Set(areas.reduce((areas, { area }) => [...areas, area], []))]

// const getUsers = async () => {
//   const users = await axios.get('https://randomuser.me/api/?page=1&results=10&nat=us');
//   setUsers(users.data.results);
//  };
//  useEffect(() => {
//   getUsers();
//  }, []);

// const list = fetchMeals();
//     list.then(({ meals }) =>
//       meals.map((meal, index) => {
//         if (index < 12) {
//           setRecipesData((prevRecipe) => [...prevRecipe, meal]);
//         }
//       }));