import imgComponent from "./src/assets/components.png";
import imgJsx from "./src/assets/jsx-ui.png";
import imgConfig from "./src/assets/react-core-concepts.png";
import imgState from "./src/assets/state-mgmt.png";

const CORE_CONCEPTS = [
  {
    image: imgComponent,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: imgJsx,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: imgConfig,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: imgState,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export default CORE_CONCEPTS;
