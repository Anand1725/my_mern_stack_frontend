import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CitynameList from "./components/cityname-list";
import CreateCityname from "./components/create-cityname";
import CitystorenameList from "./components/citystorename-list";
import CreateCitystorename from "./components/create-citystorename";

import ExercisesList from "./components/exercises-list";
import UsersList from "./components/users-list";
import ProductsList from "./components/products-list";
import ProductCreate from "./components/product-create";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import StoreOrderCreate from "./components/storeorder-create";

// ----------omkar importing StoreOrderCreatelist
import StoreOrderCreatelist from "./components/storeorder-list";

import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/citynamelist" component={CitynameList} />
        <Route path="/createcityname" exact component={CreateCityname} />
        <Route path="/citystorenamelist" component={CitystorenameList} />
        <Route
          path="/createcitystorename"
          exact
          component={CreateCitystorename}
        />

        <Route path="/" exact component={ExercisesList} />
        {/* --------omkar   Add store order list */}
        <Route path="/storeordercreatelist" component={StoreOrderCreatelist} />

        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/userlist" component={UsersList} />
        <Route path="/productslist" component={ProductsList} />
        <Route path="/productcreate" component={ProductCreate} />
        <Route path="/storeordercreate" component={StoreOrderCreate} />
      </div>
    </Router>
  );
}

export default App;
