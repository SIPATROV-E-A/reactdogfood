


import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import CardList from '../CardList/CardList';
import SearchInfo from '../SearchInfo/searchInfo';
import './App.css';
import { useEffect, useState } from 'react';
import data from '/Users/user/Documents/reactdogfood/my-app/src/assets/data.json';

function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setsearchQuery] = useState('');
  useEffect(()=>{},[]);
  const hendlyInput = (e)=>{
    searchQuery(e.target.value);
  }
  useEffect(()=>{
    const filterCards = data.filter((item)=>
      item.name.toUpperCase().includes(searchQuery.toUpperCase())
      
    );
    setCards([...filterCards]);
  }, [setsearchQuery]);
  
  return (
    <>
     <Header changeInput = {hendlyInput}/>
     <main className='content_container'>
      <div className='content_carts'>
        <SearchInfo searchtext={searchQuery} searchCount={cards.length}/>
        <CardList data={cards}/>
      </div>
     </main>
     <Footer/>
    </>
  );
}

export default App;
