import React, { useState } from 'react';
import List from './List';
import Data from './Data';

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button
          onClick={ () => setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
}
export default App;