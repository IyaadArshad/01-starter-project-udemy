import reactImage from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[generateRandomInt(3)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}