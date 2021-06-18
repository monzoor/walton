import Slider from 'react-slick';

const data = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/picsum/350/158',
    publishedAt: '14, Dec. 2021',
    author: 'admin',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A obcaecati ipsum repellat laudantium dignissimos qui ducimus nulla aliquam autem reiciendis?',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/picsum/350/158',
    publishedAt: '14, Dec. 2021',
    author: 'admin',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A obcaecati ipsum repellat laudantium dignissimos qui ducimus nulla aliquam autem reiciendis?',
  },
];

const NextArrow = (props) => {
  const { className, onClick, arrowClasses } = props;

  return (
    <div
      className={`${className} ${arrowClasses} btn btn-light p-3 d-flex justify-content-center`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick, arrowClasses } = props;
  return (
    <div
      className={`${className} ${arrowClasses} btn btn-light p-3 d-flex justify-content-center`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

const LatestBlog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow arrowClasses="short" />,
    prevArrow: <PrevArrow arrowClasses="short" />,
  };
  return (
    <div className="row mb-5">
      <div className="col-12">
        <p className="fw-bold fs-4">From the Blog</p>
      </div>
      <div className="col-12 product-slider ">
        <Slider {...settings}>
          {data.map((content) => (
            <div key={content.id} className="row border mx-0">
              <div className="col-12 my-2">
                <img src={content.image} className="img-fluid" alt="" />
              </div>
              <div className="col-12">
                <p className="text-muted">{`${content.publishedAt} / ${content.author}`}</p>
                <p className="fw-bold mb-2 pb-1">{content.title}</p>
                <p className="text-muted">{content.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestBlog;
