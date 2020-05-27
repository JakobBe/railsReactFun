import ReactOnRails from 'react-on-rails';
// import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import ProductGrid from '../bundles/React/components/ProductGrid';
import Workout from '../bundles/React/components/Workout';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  // HelloWorld,
  ProductGrid,
  Workout
});
