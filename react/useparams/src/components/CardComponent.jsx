import { Link } from "react-router-dom";
const CardComponent = ({ data }) => {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.title}</p>
              <Link to={`/info/${item.name}/`}>View Description</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardComponent;
