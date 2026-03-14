import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from 'react';
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Component</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </menu>
          </section>
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? <div id="tab-content">
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> : null}
        </main>
      </div>
    </div>
  );
}

export default App;