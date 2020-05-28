
import * as React from "react";
import ProductItem from "./components/ProductItem/ProductItem";

interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <div>
        Hello {name} comment ca va? t la?
        alooooors??? xdfghjkil FAIS LEEE gfhghj
        <ProductItem />
      </div>
    );
  }
}

export default App;
