// import Message from './Message';
import ListGroup from './components/ListGroups';


function App() {
  const items = [
    'mumbai',
    'delhi',
    'kolkata',
    'hyderabad',
    'kashmir',
    'chennai',
    'karnataka',
    'kerela',
    'haryana',
    'punjab'
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
