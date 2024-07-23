import React, { useEffect, useState } from "react";
function App() {
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch(
      "https://u53sgo2qwaxvzfsrjp6uogdpgy0pbldx.lambda-url.ap-northeast-2.on.aws/api/v1/informations"
    )
      .then((res) => res.json())
      .then((res) => setText(res.data));
  }, []);
  return (
    <>
      {text.map((item) => {
        return <div>{item.informationDogName}</div>;
      })}
    </>
  );
}

export default App;
