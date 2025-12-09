import { useRef } from "react";
import { useEffect } from "react";

function ValueDisplay({ savedValue }) {
  const prevValueRef = useRef("");

  const previousValue = prevValueRef.current;

  useEffect(() => {
    prevValueRef.current = savedValue;
  }, [savedValue]);

  return (
    <>
      <div>
        <p>Current Value: {savedValue}</p>
        <p>Previous Value : {previousValue}</p>
      </div>
    </>
  );
}

export default ValueDisplay;
