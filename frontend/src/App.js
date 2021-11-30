import React from 'react';
import './App.css';


// mettre nos widget avec header et footer
import Header from './Components/Header';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import Widget3 from './Components/Widget3';
import Widget4 from './Components/Widget4';
import Widget5 from './Components/Widget5';


class App extends React.Component {

  render() {
    return (
      <div class="General">

        <meta charSet="utf-8" />
        <title>Dashboard FOOTBALL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" /> {/*permet de controler la mse en page et de pas zoomer*/}
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

        <br></br>
        {/*Header debut */}

        <Header />

        {/*Header fin */}

        <main>
          <div className="container-fluid">
            <div class="row">
              <div class="col-lg-3">
                <Widget1 />
              </div>
              <div class="col-lg-6">
                <Widget2 />
              </div>
              <div class="col-lg-3">
                <Widget5 />
                <Widget4 />
              </div>
            </div>
          </div>
        </main>

        {/* <Footer /> */}
      </div>
    );
  }

}

export default App;
