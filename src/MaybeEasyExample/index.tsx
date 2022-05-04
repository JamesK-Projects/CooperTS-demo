import { Maybe } from "maybeasy";
import * as React from "react";

interface Props {
  value: Maybe<string>;
}

type InputType = "odd" | "even" | "unknown";

const MaybeEasyExample: React.FC<Props> = ({ value }) => {
  const oddOrEven = (n: string): InputType => {
    switch (parseInt(n) % 2) {
      case 0:
        return "even";
      case 1:
        return "odd";
      default:
        return "unknown";
    }
  };

  const numberConvertor = (value: InputType) => {
    switch (value) {
      case "odd":
        return <div>Odd</div>;
      case "even":
        return <div>Even</div>;
      default:
        return <></>;
    }
  };

  return (
    <div>
      {value
        .map(oddOrEven)
        .map(numberConvertor)
        .getOrElseValue(<></>)}
    </div>
  );
};

export default MaybeEasyExample;
