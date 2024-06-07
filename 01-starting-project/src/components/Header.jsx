


import imgReact from "../assets/react-core-concepts.png";



const fundamentos = ["Fundamental", "Crucial", "Core"];




function getRandomInt(limite) {
    return Math.floor(Math.random() * (limite + 1));
}
 
export default function Header() {
    return (
      <header>
        <img src={imgReact} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          <b> {fundamentos[getRandomInt(2)]} </b> React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>
    );
  }
  