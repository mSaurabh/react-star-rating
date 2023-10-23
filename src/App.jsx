import { useState } from "react";
import "./App.css";
import StarRating from "./component/star-rating";

export default function App() {
  const [productRating, setProductRating] = useState(0);

  return (
    <main>
      Product Rating : {productRating}
      <StarRating onChange={setProductRating}></StarRating>
    </main>
  );
}
