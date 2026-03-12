import reactImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title + " image"} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>core concepts</h2>
            <ul>
              <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}/>
              <CoreConcept
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
                image={CORE_CONCEPTS[1].image} />
              <CoreConcept
                title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
                image={CORE_CONCEPTS[2].image} />
              <CoreConcept
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                image={CORE_CONCEPTS[3].image} />
            </ul>
          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
    </div>
  );
}

export default App;