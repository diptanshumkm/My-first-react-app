import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';

function App() {

  const response = [
    {
      itemName : "volvo",
      itemDate: "20",
      itemMonth: "June22",
      itemYear : "20011111"
    },

    {
      itemName : "Bmw",
      itemDate: "2011",
      itemMonth: "June33",
      itemYear : "2001222"
    },

    {
      itemName : "Volkshwagen",
      itemDate: "2022",
      itemMonth: "June11",
      itemYear : "20013333"
    }
  ]

  return (
    <div>
        <cards>
            <Item name = {response[0].itemName}>
              Hello everyone this is my 1st react app
            </Item>
            <ItemDate day = {response[0].itemDate} month = {response[0].itemMonth} year = {response[0].itemYear} ></ItemDate>
            
            <Item name= {response[1].itemName}></Item>
            <ItemDate day = {response[1].itemDate} month = {response[1].itemMonth} year = {response[1].itemYear}></ItemDate>
            
            <Item name = {response[2].itemName}></Item>
            <ItemDate day = {response[2].itemDate} month = {response[2].itemMonth} year = {response[2].itemYear}></ItemDate>

        </cards>
     
    </div>
    
  );
}

export default App;
