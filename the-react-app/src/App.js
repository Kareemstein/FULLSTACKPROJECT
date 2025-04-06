import MyComp from './MyComp';
import Car from './Car';


function App() {
  return (
    <>
    <h1>React App - Tel Hai</h1>
    
    
    <MyComp data="MyComp 01"/>
    <MyComp data="MyComp 02"/>
    <MyComp data="MyComp 03"/>
    <Car carData={{id:"123", Model: "Tesla", color:"Black"}} />

    </>

  );
}

export default App;
