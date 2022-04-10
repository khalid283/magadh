import * as React from 'react';
import { Button } from '@components';
interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">Hello {name}</h1>
        <Button onClick={() => null}>hello</Button>
      </>
    );
  }
}

export default App;
