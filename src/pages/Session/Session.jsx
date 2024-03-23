/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const coache = [
//   {
//     name: "NICOLE WINTER",
//     category: ["PILATES", "YOGA"],
//     img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845478-QY336CGB319C7V2J9P0R/Nicole%2BWinter.jpg?format=2500w",
//     age: 25,
//     height: 1.75,
//     gender: "male",
//     phone: "05657667",
//   },
//   {
//     name: "AARON HUGHES",
//     category: ["STRENGTH TRAINING", "BOXING"],
//     img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845484-ULMHSV4RD7QF5UH5DY2T/Stocksy_comp_2908015-%281%29.jpg?format=2500w",
//     age: 25,
//     height: 1.75,
//     gender: "male",
//     phone: "05657667",
//   },
//   {
//     name: "DERRICK SAWYERS",
//     category: ["CARDIO", "CORE"],
//     img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845489-7ET4Y8RHYKQMMS1ER3CS/Derrick%2BSawyers.%2BCardio%252C%2BCore.jpg?format=2500w",
//     age: 25,
//     height: 1.75,
//     gender: "male",
//     phone: "05657667",
//   },
//   {
//     name: "ALIYAH WILLIAMS",
//     category: ["CORE", "CARDIO"],
//     img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845500-CUULFHP3RRMHTV8179R0/Aliyah%25252BWilliams.%25252BCore%2525252C%25252BCardio.jpg?format=2500w",
//     age: 25,
//     height: 1.75,
//     gender: "male",
//     phone: "05657667",
//   },
//   {
//     name: "OMAR HARRIS",
//     category: ["CARDIO", "YOGA"],
//     img: "https://images.squarespace-cdn.com/content/v1/624b3c6e48a38b1e837e59fb/1649097845506-E2OZ4XVFK4UVUCD04DG5/Omar+Harris.+Cardio%2C+Yoga.?format=2500w",
//     age: 25,
//     height: 1.75,
//     gender: "male",
//     phone: "05657667",
//   },
//   {
//     name: "TESHIA MILLER",
//     category: ["BOXING", "STRENGTH TRAINING"],
//     img: "https://www.bollywoodhungama.com/wp-content/uploads/2022/04/Aamir-Khan-to-tell-a-special-kahaani-on-April-28.jpe",
//     age: 25,
//     height: 1.75,
//     gender: "male",
//     phone: "05657667",
//   },
// ];
const Session = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/coach/allCoach")
      .then((res) => res.json())
      .then((data) => {
        setCoaches(data.coachs);
      });
  }, []);
  return (
    <div className="pt-24">
      <h1 className="anton text-5xl text-center">
        Book a Session with your favourite coach
      </h1>
      <div className="w-full grid sm:grid-cols-4 gap-10 sm:px-10 py-24">
        {coaches?.map((data, i) => (
          <div
            key={data._id}
            className="w-full h-[600px] flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center sm:opacity-0 opacity-100 gap-2 card-prop">
              <h1 className="anton text-3xl">Name : {data.name}</h1>
              <div className="flex items-center gap-5 anton text-xl">
                <h1>Age : {data.age}</h1>
                <h1>Height : {data.height} cm</h1>
              </div>
              <h1 className="anton text-xl">Gender : {data.gender}</h1>
              <h1 className="anton text-xl">Phone : {data.phone}</h1>
              <div className="w-full flex items-center justify-center py-3">
                <Link
                  to={`/session/${data._id}`}
                  className="px-5 py-2 bg-white text-black rounded-md font-medium"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session;
