import '../styles/card.css';


const Card = ({ url, title, description }) => {
 return (
  <div className='card'>
   <img src={url} alt="" width={200} />
   <h2>{title}</h2>
   <p>{description}</p>
  </div>
 )
}

export default Card
