import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/mainPage";
import Rooms from "./components/pages/rooms";
import BookedRooms from "./components/pages/bookedRooms";
import AdminPanel from "./components/pages/adminPanel";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/bookedRooms" component={BookedRooms} />
        <Route path="/adminPanel" component={AdminPanel} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
