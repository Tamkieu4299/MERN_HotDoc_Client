import Navbar from "../navbar/Navbar";
import { StarOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const fakeDataBlog = [
    {
        id: 1,
        name: 'Có bầu 4 tháng có quan hệ được không',
        des: 'Có bầu 4 tháng quan hệ được không? Chắc hẳn đây là mối băn khoăn của hầu hết các cặp vợ chồng. Liệu khi quan hệ có ảnh hưởng gì đến em bé trong bụng không?',
        star: 5,
        img: 'https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg',
        author: 'Quan',
        time: '20/8/2022'
    },
    {
        id: 2,
        name: 'Đau rát tầng sinh môn khi quan hệ là bệnh gì ?',
        des: 'Có rất nhiều nguyên nhân gây đau rát tầng sinh môn khi quan hệ, đây là vùng nhạy cảm dễ bị tổn thương của phụ nữ. Tình trạng này có thể bị gây ra bởi tình trạng nhiễm trùng vùng kín, hoặc có thể là do một số loại bệnh lây truyền qua đường tình dục.',
        star: 4 ,
        img: 'https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg',
        author: 'Tam',
        time: '10/8/2022'
    },
    {
        id: 3,
        name: 'Uống thuốc tránh thai hàng ngày có thai không?',
        des: 'Uống thuốc tránh thai hàng ngày là một trong những lựa chọn được các cặp đôi dùng khi muốn ngừa thai hiệu quả, Tuy nhiên, bên cạnh lợi ích của thuốc mang lại thì vẫn còn không ít những băn khoăn, thắc mắc của chị em khi dùng thuốc, trong đó câu hỏi được thắc mắc nhiều nhất là ” Uống thuốc tránh thai hàng ngày có thai không?',
        star: 2,
        img: 'https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg',
        author: 'Phuong',
        time: '01/07/2019'
    },
]

const DetailBlog = () => {

    const { id } = useParams();
    const [item, setItem] = useState();

    const renderStar = (star) => {
        if (star === 5) {
            return (
                <>
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                </>
            )
        }

        if (star === 4) {
            return (
                <>
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                <StarOutlined className="bg-yellow" />
                </>
            )
        }

        if (star === 3) {
            return (
                <>
               <StarOutlined className="bg-yellow" />
               <StarOutlined className="bg-yellow" />
               <StarOutlined className="bg-yellow" />
                </>
            )
        }

        if (star === 2) {
            return (
                <>
               <StarOutlined className="bg-yellow" />
               <StarOutlined className="bg-yellow" />
                </>
            )
        }

        if (star === 1) {
            return (
                <>
                 <StarOutlined className="bg-yellow" />
                </>
            )
        }
    }

    useEffect(() => {
        const data = fakeDataBlog.find(item => item.id == id);
        setItem(data);
    },[])

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row text-align-center">
                    <div className="col-12 ">
                        <h2>{item?.name}</h2>
                        <img className='img-post' src={item.img} alt="" />
                        <div className="row pt-4">
                <div className="col-md-6 ">
                    <div className="entry-meta align-items-center meta-2 font-small color-muted">
                    <p className="mb-5">
                        <a className="author-avatar" href="#"><img className="img-circle" src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg" alt /></a>
                                        By <a href="author.html"><span className="author-name font-weight-bold">{ item.author}</span></a>
                    </p>

                    </div>
                </div>
                            <div className="col-md-6 text-right d-none d-md-inline">
                                <span>Rate:</span>
                                {
                            renderStar(item.star)
                        }
                </div>
                </div>

                        <div className="text-post">
                        {item.des}
                        </div>

                        <div className="comment">
                            <div className="first">
                            <input type="text" className="input1" placeholder="Full Name" />
                            <input type="text" className="input1" placeholder="Email Address" />
                            </div>
                            <textarea className="textarea" placeholder="Description"></textarea>
                            <div className="but">
                            <button className="btn-submit">Submit</button>
                            </div>
                        </div>

                            <div className="h4 title-demo">Related Post</div>
                        <div className="recommend">
                            {
                                fakeDataBlog.map((e) => (
                                    <div className="card-review">
                                <div className="left-img">
                                    <img src={e.img} alt="" />
                                </div>
                                <div className="right-show">
                                    <h3>{e.name}</h3>
                                    <p>A shortage of several hundred ventilators in New York City, the epicentre of the outbreak in the US</p>
                                </div>
                            </div>
                                ))
                            }
                        </div>
                        
                            </div>
                        </div>


                        <div>
                    </div>

                </div>
        </>
    )
}

export default DetailBlog;