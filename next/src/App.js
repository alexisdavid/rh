import RoutesModule from "./Routes";
import { AppProvider } from "./Context/AppContext"; 


function App() {
  return (
    <div className="App">
      <AppProvider>
       <RoutesModule /> 
      </AppProvider>
    </div>
  );
}

export default App;
