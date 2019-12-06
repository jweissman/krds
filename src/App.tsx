import React from 'react';
import classnames from 'classnames';
import './App.scss';

class Button extends React.Component<{
  primary?: boolean,
  size?: 'large' | 'small',
}> {
  render() {
    let size = this.props.size || 'medium';
    return <button className={classnames([
      "Button",
      (this.props.primary ? 'Button--primary' : ''),
      (this.props.size === 'large' ? 'Button--large' : ''),
    ])}>
      {this.props.children}
    </button>
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Krypton
      </header>
      <main className="App-content">
        <p>the app content</p>
        <p>card</p>
        <div className="Card">
          <div className="Card-title">
            card title
          </div>
          <div className="Card-body">
            card body
          </div>
        </div>
        {/* <Card>
          <CardTitle></CardTitle>
          <CardBody></CardBody>
        </Card> */}

        <p>small button</p>
        <Button>
          Hi!
        </Button>
        <p>large primary button</p>
        <Button primary size="large">
          Hi!
        </Button>
      </main>
      <footer className="App-footer">
        the app footer
      </footer>
    </div>
  );
}

export default App;
