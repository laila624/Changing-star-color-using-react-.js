import { useState } from "react"


export default function App(){
const [Star , setStar] = useState(true);

function Toggle () {
  setStar((v) => !v)
}

  return (
    <div style={{fontSize:"80px", textAlign:"center"}} onClick={Toggle}>
     <i class="fa-solid fa-star" style={{color : Star ? "" : "gold"}}></i>
    </div>
  );
};