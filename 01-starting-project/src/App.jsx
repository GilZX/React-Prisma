
import CORE_CONCEPTS from "../data.js";
import imgComponent from "../src/assets/components.png";
import imgJsx from "../src/assets/jsx-ui.png";
import imgConfig from "../src/assets/react-core-concepts.png";
import imgState from "../src/assets/state-mgmt.png";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TollBarButton from "./components/TollBarButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";



function App() {


  const [value,setValue]=useState()

  let content="Please Selected a option."
  
  
  if(value){
    content=(<div id='tab-content'>

      <h3>{EXAMPLES[value].title}</h3>
      <p> {EXAMPLES[value].description}</p>
      <pre>
        <code>
         {EXAMPLES[value].code}
        </code>
      
      </pre>
    </div>)
  }
 

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts With Map</h2>
          <ul>

          {CORE_CONCEPTS.map((element)=><CoreConcepts title={element.title} description={element.description} image={element.image}/>)}


          <p>Core Concepts Manual</p>
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
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>

          <TollBarButton  isSelected={value==='components'} onSelected={()=>setValue("components")}>Componets</TollBarButton>
          <TollBarButton   isSelected={value==='jsx'} onSelected={()=>setValue("jsx")}>Jsx</TollBarButton>
          <TollBarButton   isSelected={value==='props'} onSelected={()=>setValue("props")}>Props</TollBarButton>
          <TollBarButton   isSelected={value==='state'} onSelected={()=>setValue("state")}>State</TollBarButton>

          </menu>

          <p>Dynamics</p>

          {content}

   

            
        </section>
      </main>
    </div>
  );
}

export default App;
