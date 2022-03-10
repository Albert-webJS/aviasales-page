import Transfer from "./components/Transfer/transfer";
import AviaCompany from "./components/AviaCompany/aviaCompany";
import SearchFilter from "./components/SearchFilter/searchFilter";
import TicketList from "./components/TicketList/TicketList";
import AddTicket from "./components/AddTicket/addTicket";
import WebFontLoader from "webfontloader";

import "normalize.css";
import style from "./App.module.css";
import React from "react";
import Logo from './assets/Logo.png'


WebFontLoader.load({
  google: {
    families: ["Open Sans: 300, 400, 700"],
  },
});

const App = () => {
  return (
    <div className="container">
      <a className={style.logo}><img src={Logo}></img></a>
      <div className={style.boxSearchTicket}>
      <div className={style.boxFilter}>
        <Transfer />
        <AviaCompany />
      </div>
      <div className={style.boxTicket}>
        <SearchFilter />
        <TicketList />
        <AddTicket />
      </div>
    </div>
    </div>
  );
};

export default App;
