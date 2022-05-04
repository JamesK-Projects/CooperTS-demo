import { just } from "maybeasy";
import * as React from "react";
import HelloWorld from "./HelloWorld";
import HelloWorldWithTranslations from "./HelloWorldWithTranslations";
import MaybeEasyExample from "./MaybeEasyExample";
import "./style.css";

interface Props {}

interface State {
  helloWorldValue: string;
  maybeEasyValue: string;
}
class App extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      helloWorldValue: "",
      maybeEasyValue: "",
    };
  }

  onHelloWorldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ helloWorldValue: e.target.value });
  };

  onMaybeEasyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ maybeEasyValue: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <h2>Hello World</h2>
          <div className="box">
            <input
              type="text"
              onChange={this.onHelloWorldChange}
              value={this.state.helloWorldValue}
            />
            <HelloWorld text={this.state.helloWorldValue} />
          </div>
        </div>
        <div className="container">
          <h2>Hello World with Translations</h2>
          <div className="box">
            <HelloWorldWithTranslations />
          </div>
        </div>
        <div className="container">
          <h2>Maybeasy Example</h2>
          <div className="box">
            <input
              type="text"
              onChange={this.onMaybeEasyChange}
              value={this.state.maybeEasyValue}
            />
            <MaybeEasyExample value={just(this.state.maybeEasyValue)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
