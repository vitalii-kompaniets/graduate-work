import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/mainPage";
import Rooms from "./components/pages/rooms";
import FavouritesRooms from "./components/pages/favouritesRooms";
import Users from "./components/pages/users";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/pages/login";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/favouritesRooms" component={FavouritesRooms} />
        <Route path="/users" component={Users} />
        <Route path="/login/:type?" component={Login} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
