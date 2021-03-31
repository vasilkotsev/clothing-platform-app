import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribedFromAuth = null;

  componentDidMount() {
    //open subscription firebase authentication
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //getting userRef object to check if database is updated
        const userRef = await createUserProfileDocument(userAuth);

        // Get the snapshot of userRef Document, set the state with userRef properties and listen for any userRef updates in database/subscribing/
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        // set the state to null, when user is signed out
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth(); // close open subscription from firebase authentication
  }

  render() {
    return (
      <React.Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
