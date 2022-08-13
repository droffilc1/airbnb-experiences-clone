
import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './data'

function App() {
  const cardsEl = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {cardsEl} 
      </section>          
    </div>
  );
}

export default App;
