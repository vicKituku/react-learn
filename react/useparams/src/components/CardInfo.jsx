import { useParams } from "react-router-dom";
function CardInfo({ data }) {
  const { name } = useParams();
  return (
    <>
      <section className="card-wrapper">
        <div>
          {data
            .filter((item) => item.name === name)
            .map((item, index) => (
              <div key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default CardInfo;
