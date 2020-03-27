import React from 'react';

// function Header() {

export default function Header({ children }) {
  return (
    <header>
      <h1>{ children }</h1>
    </header>
  );
};

// props passa os valores de propriedades para o JSX
// export default function Header(props) {

// desestruturando props para pegar apenas o valores que interessa
// export default function Header({ title }) {
//   return (
//     <header>
//       {/* <h1>{ props.title }</h1> */}

//       {/* pegando valor desestruturado */}
//       <h1>{ title }</h1>

//       {/* pega o que foi definido entre as tags <Header> */}
//       {/* <h1>{props.children}</h1> */}
//     </header>
//   );
// };

// export default Header;
