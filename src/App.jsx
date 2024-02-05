// import { useState, useEffect } from 'react'
// import './app.css'
// import TodoApp from './components/TodoApp'

// function App() {
//   // const [count, setCount] = useState(0)

//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // Function to toggle between light and dark themes
//   const toggleTheme = () => {
//     setIsDarkTheme((prevTheme) => !prevTheme);
//   };

//   const mainDivStyle = {
//     background: 'var(--background-color)',
//   };

//   // Effect to update the CSS variables when the theme changes
//   useEffect(() => {
//     const root = document.documentElement;
//     const themeVariables = isDarkTheme
//       ? {
//         '--background-color': '#282c35',
//         '--text-color': '#ffffff',
//       }
//       : {
//         '--background-color': '#ffffff',
//         '--text-color': '#000000',
//       };

//     Object.entries(themeVariables).forEach(([key, value]) => {
//       root.style.setProperty(key, value);
//     });
//   }, [isDarkTheme]);


//   return (
//     <div style={mainDivStyle}>
//       <TodoApp isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

//     </div>
//   )
// }

// export default App
