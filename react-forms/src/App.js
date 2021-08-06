import './index.css';
import React, { useState } from 'react';
import Form from './components/Form.jsx';
import Card from './components/Card.jsx';

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('./assets', false, /\.(png|jpe?g|svg|ico)$/));

function App() {
  const [formValues, setFormValues] = useState([]);

  return (
    <div className="App">
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </main>
    </div>
  );
}

export default App;
