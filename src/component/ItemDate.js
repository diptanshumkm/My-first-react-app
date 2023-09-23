
import './ItemDate.css'


function ItemDate(props){
const days = props.day;
const month = props.month
const year = props.year

    return(
        <div className='hell'>
            <div>{days}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ItemDate;