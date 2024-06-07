
import CORE_CONCEPTS from "../data.js";
import imgComponent from "../src/assets/components.png";
import imgJsx from "../src/assets/jsx-ui.png";
import imgConfig from "../src/assets/react-core-concepts.png";
import imgState from "../src/assets/state-mgmt.png";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TollBarButton from "./components/TollBarButton.jsx";



function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The Core of React UI Building Block."
              image={imgComponent}
            />

            <CoreConcepts
              {...CORE_CONCEPTS[1]}
            />

            <CoreConcepts
              title="Props"
              description="Make Components configurable(and therefore reusable) by passing input data to them."
              image={imgConfig}
            />

            <CoreConcepts
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TollBarButton>Componets</TollBarButton>
          <TollBarButton>Jsx</TollBarButton>
          <TollBarButton>Props</TollBarButton>
          <TollBarButton>State</TollBarButton>
          </menu>
            
        </section>
      </main>
    </div>
  );
}

export default App;
