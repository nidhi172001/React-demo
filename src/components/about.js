import { useEffect, useState } from "react";

function About() {
  const [name, setName] = useState("About");
   const [count, setCount] = useState(0);

     useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  return (
    <div className="p-4 text-center">
      <h1>{name} Page</h1>
      <button
        onClick={() => setName("Updated About")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
       Update Name 
      </button>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default About;
