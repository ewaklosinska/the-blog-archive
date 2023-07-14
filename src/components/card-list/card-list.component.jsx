import './card-list.style.css'
import Card from "../card/card.component";


const CardList = ({posts}) => {

  const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);

        return(
            <div className="card-list">
                {sortedPosts.map(post => {
                    return (
                        <Card key={post.id} post={post}/>
                    )}
                )}
            </div>
        )
    }


export default CardList;