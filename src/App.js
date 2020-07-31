import React from "react";
import "./styles.css";

/*export default function App() {
  return (
    <div className="App">
      <h1 class="hello">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Menu du jour </h1>
        <ul>
          <li>
            {" "}
            Couscous <button> X </button>{" "}
          </li>
          <li>
            {" "}
            Fufu <button> X </button>{" "}
          </li>
          <li>
            {" "}
            Taro <button> X </button>{" "}
          </li>
          <li>
            {" "}
            Bongo <button> X </button>{" "}
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un plat au menu" />
          <button> Confirmer </button>
        </form>
      </div>
    );
  }
}
