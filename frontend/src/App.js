import React from 'react';
import Routes from './routes';
import './global.css';

function App() {
  return (
    <Routes />
  );
  // para que o valor de uma variável seja refletida no front-end
  // é necessário aplicar o conceito de Estado do React com a builtin
  // 'useState()'
  //
  // e isse está realacionado ao conceito de Imutabilidade
  // onde, no React, não é possível alterar o valore de uma variável/estado
  // de maneira direita
  //
  // o useState retorna um array contendo o valor da variável e uma
  // função 'setCounter' que serve para alterar o valor dessa variável
  // let counter = useState(0);
  // let [ counter, setCounter ] = useState(0);

  // function increment() {
  //   // counter += 1;
  //   // console.log(counter);
  //   setCounter(counter + 1);
  // }

  // return (
  //   <div>
  //     <Header>Contador: { counter }</Header>
  //     <button onClick={increment}>Incrementar</button>
  //   </div>

  //   // title é uma props definida em Header
  //   // {/* <Header title="Semana OmniStack" /> */}

  //   // aplicando props sem criar uma nova propriedade
  //   // <Header>
  //   //    Semana OmniStack
  //   // </Header>
  // );
}

export default App;
