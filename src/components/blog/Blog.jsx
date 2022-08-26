import "./blog.css";
import { Link } from "react-router-dom";


const Blog = (props) => {
    const { id, name, des, star, img, author, time } = props.item
    
    const renderStar = (star) => {
        if (star === 5) {
            return (
                <>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                </>
            )
        }

        if (star === 4) {
            return (
                <>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                </>
            )
        }

        if (star === 3) {
            return (
                <>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                </>
            )
        }

        if (star === 2) {
            return (
                <>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                </>
            )
        }

        if (star === 1) {
            return (
                <>
                <div className=""><img className="star" src="https://toppng.com/uploads/preview/old-star-png-transparent-clip-art-image-gold-star-transparent-background-11562869484fjri0mgicf.png" alt="" /></div>
                </>
            )
        }
    }
    return (
        <div className="blog">
            <div className="left_blog">
                <img className="anh" src={img} alt="" />
            </div>
            <div className="right_blog">
                <h1 className="titleName">
                    <Link className="link-redirect" to={`/detail-blog/${id}`}>{name}</Link>
                </h1>
                <p className="text">
                {des}
                </p>
                <div className="function">
                    <div className="review">
                    <div className="button author">
                        {author}
                    </div>
                    <div className="button time">
                        {time}
                    </div>
                    </div>
                    <div className="rate">
                        {
                            renderStar(star)
                        }
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Blog