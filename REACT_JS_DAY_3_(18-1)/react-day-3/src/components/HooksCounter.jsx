import React, { useState } from "react";

export default function HooksCounter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="text-center mt-3">
        <p>HooksCounter</p>
        <div>
          <button className="btn btn-outline-success" onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
      </div>
    </>
  );
}
