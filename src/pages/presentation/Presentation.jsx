import React from 'react';
import Typed from "typed.js";

const Presentation = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Hola</i> me llamo Francisco Hernandez Sabatino. Soy Desarrollador Web Full Stack.\n Uso JavaScript a diario con React/NextJs en el front y NodeJs en el back, tambien tengo conocimientos en Python y Flask.", "Estoy expandiendo mis conocimientos con C#, TypeScript y Angular"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
};

export default Presentation;
