import React, { useState } from "react";

import CommonStyledButton from "./CommonStyledButton";

function HooksExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/** Button styles are written as common using styles components */}
      <CommonStyledButton primary onClick={() => setCount(count + 1)}>
        Click me
      </CommonStyledButton>
    </div>
  );
}

export default HooksExample;
