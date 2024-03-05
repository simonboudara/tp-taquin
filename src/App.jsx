import Bernard from "./Bernard"
import { BernardBase } from "./Bernard"


function App() {
  return (
    <div class="flex flex-col justify-around items-center bg-green-200 w-screen h-screen">
      <div class="bg-red-300 p-2 flex"> 
      
        <div class="flex flex-col bg-yellow-800 p-3">
          <Bernard number={1} />
          <Bernard number={2} />
        </div>
        <div class="flex flex-col bg-yellow-700 p-3">
          <Bernard number={3} />
          <Bernard number={4} />
        </div>
      </div>
    </div>
  );
}

export default App;
