import React from "react";
import data from "./data.json";
import style from "./TicketList.module.css";
import DescrValue from "./descrValue/DescrValue";
// import firebase from "firebase";

// image logo
import airlines from "./assets/airlines-logo.png";
import xiamenair from "./assets/xiamenair-logo.png";

// const firebaseConfig = {
//   apiKey: "AIzaSyAhG7u_S472eHAeyz_ebZBlABBV1iAtces",
//   authDomain: "airlines-36930.firebaseapp.com",
//   databaseURL: "https://airlines-36930-default-rtdb.firebaseio.com",
//   projectId: "airlines-36930",
//   storageBucket: "airlines-36930.appspot.com",
//   messagingSenderId: "320503835153",
//   appId: "1:320503835153:web:4430e6d9fdd0bd6a679fb0",
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// database.ref("airlines").once("value", (snapshot) => {
//   console.log("#### snapshot", snapshot.val());
// });
const textContent = "в пути";

const TicketList = () => {
  return (
    <React.Fragment>
      {data.map((item) => {
        return (
          <div key={item.id} className={style.ticket}>
            <div className={style.header}>
              <div className={style.price}>{item.price} P</div>
              <div className="company">
                {item.company === "airlines" ? (
                  <img src={airlines} alt={item.company} />
                ) : (
                  <img src={xiamenair} alt={item.company} />
                )}
              </div>
            </div>
            <div className={style.route}>
              <DescrValue
                description={`${item.segments[0].origin} ${item.segments[0].destination}`}
                date={item.segments[0].date}
              />
              <DescrValue description={textContent} date="21ч 15м" />
              <DescrValue
                description={`${item.segments[0].stops.length} пересадки`}
                date={item.segments[0].stops.filter((stop) => (
                  <span>{stop}</span>
                ))}
              />
              <DescrValue
                description={`${item.segments[1].origin} ${item.segments[1].destination}`}
                date={item.segments[1].date}
              />
              <DescrValue description={textContent} date="13ч 30м" />
              <DescrValue
                description={`${item.segments[1].stops.length} пересадки`}
                date={item.segments[1].stops.filter((stop) => (
                  <span>{stop}</span>
                ))}
              />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TicketList;
