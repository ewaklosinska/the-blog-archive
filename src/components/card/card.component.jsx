import './card.styles.css';

const Card = ({post}) => {
    const { id, title, body } = post;
    
    return (
        <div> 
            <div className='card-container' key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div> 
        </div>
        );
    }
 
export default Card;