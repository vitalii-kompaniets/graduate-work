import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/layouts/mainPage";
import Rooms from "./components/rooms";
import BookedRooms from "./components/bookedRooms";
import AdminPanel from "./components/adminPanel";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

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
