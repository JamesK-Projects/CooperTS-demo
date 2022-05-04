import { fromNullable } from "maybeasy";
import * as React from "react";

interface Props {
  text: string;
}

const HelloWorld: React.FC<Props> = ({ text }) => (
  <div>
    {fromNullable(text)
      .map((v) => <div style={{ marginLeft: "10px" }}>{v}</div>)
      .getOrElseValue(
        <div style={{ marginLeft: "10px" }}>No text provided</div>
      )}
  </div>
);

export default HelloWorld;
