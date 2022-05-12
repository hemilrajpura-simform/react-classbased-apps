import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Header from "./Header";
// import { Users } from '../Data';  //Practical-5
import PageNotFound from "./PageNotFound";
import "./UserList.css";
import Popup from "./Popup";
import Loading from "./Loading";
import { Moon, Sun } from "react-feather";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            selectedUser: null,
            pageFound: false,
            pageLoading: false,
            currentPage: 1,
            user: [],
        };
    }
    componentDidMount() {
        this.loadUsersFromAPI();
        console.log(this.state);
    }
    // componentDidUpdate() {
    //     this.loadUsersFromAPI();
    // }

    paginationHandler = (number) => {
        if (number === "reload") {
            this.setState({ currentPage: 1 });
            return;
        }
        this.setState({ currentPage: number });
        console.log(this.state.currentPage)
        this.loadUsersFromAPI();
        return;
    };

    closePopup = () => {
        this.setState({ showPopup: false });
    };
    showPopupHandler = (item) => {
        this.setState({ showPopup: true });
        this.setState({ selectedUser: item });
    };

    paginationStyle = {
        outline: "2px solid black",
    };

    loadUsersFromAPI() {
        this.setState({ pageLoading: true })
        fetch(
            "https://reqres.in/api/users?page=" + this.state.currentPage.toString(),
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview",
                }),
            }
        )
            .then((res) => res.json())
            .then(response =>
                this.setState({ user: response.data, pageLoading: false })

            )
            .catch((error) => console.log(error, "here here shyam"));

    }
    render() {
        return <>
            {this.state.pageLoading && <Loading />}
            {this.state.pageFound && <PageNotFound paginationHandler={this.paginationHandler} />}
            <div >
                <div className='main-container' style={this.props.darkMode ? this.props.darkModeStyle : null} onMouseLeave={this.closePopup}>
                    <div className='user-list-main' style={this.props.darkMode ? this.props.darkModeStyle : null}>
                        <div className='darkMode-main'>

                            <button onClick={this.props.darkModeHandler} id="darkMode-btn">
                                {this.props.darkMode ? <Sun /> : <Moon />}

                            </button>
                        </div>

                        <Header />
                        {
                            this.state.user.map(item => (
                                <div key={item.id} style={this.props.darkMode ? this.props.darkModeStyle : null} >
                                    <UserItem
                                        showPopupHandler={this.showPopupHandler}
                                        username={item.first_name + " " + item.last_name}
                                        image={item.avatar}
                                        email={item.email}
                                        status={item.status}
                                        access={item.access = "Read"}
                                        userId={item.id}
                                        id={item.id}
                                        closePopup={this.closePopup}
                                    />
                                </div>
                            ))
                        }
                        <div className='pagination'>
                            <button
                                style={this.state.currentPage === 1 ? this.paginationStyle : null}
                                onClick={() => this.paginationHandler(1)}>1</button>

                            <button
                                style={this.state.currentPage === 2 ? this.paginationStyle : null}
                                onClick={() => this.paginationHandler(2)}>2</button>

                        </div>
                    </div>

                    {this.state.showPopup && (
                        <div className='userShow-main'>


                            <Popup
                                className='popup-main'
                                selectedUser={this.state.selectedUser} />

                        </div>

                    )}
                </div>
            </div>
        </>;
    }
}
export default UserList;

/*  const UserList = (props) => {




      useEffect(() => {


          const f = async () => {
              setPageLoading(true);
              const res = await fetch("https://reqres.in/api/users?page=" + currentPage.toString());
              const json = await res.json();
              setUsers(json.data);
              setPageLoading(false);
          };

          const pageFoundHandler = () => {
              if (users.length !== 0) {
                  setPageFound(true);
              }
              else {
                  setPageFound(false);
              }

          };
          f();
          pageFoundHandler();


      }, [currentPage, users.length]);





      return (

          pageLoading ? <Loading /> :
              !pageFound ? <PageNotFound paginationHandler={paginationHandler} /> : (
                  <div >
                      <div className='main-container' style={props.darkMode ? props.darkModeStyle : null} onMouseLeave={closePopup}>
                          <div className='user-list-main' style={props.darkMode ? props.darkModeStyle : null}>
                              <div className='darkMode-main'>
                                  <button onClick={props.darkModeHandler} id="darkMode-btn">
                                      {props.darkMode ? <Sun /> : <Moon />}

                                  </button>
                              </div>
                              <Header />
                              {
                                  users.map(item => (
                                      <div key={item.id} style={props.darkMode ? props.darkModeStyle : null} >
                                          <UserItem
                                              showPopupHandler={showPopupHandler}
                                              username={item.first_name + " " + item.last_name}
                                              image={item.avatar}
                                              email={item.email}
                                              status={item.status}
                                              access={item.access = "Read"}
                                              userId={item.id}
                                              id={item.id}
                                              closePopup={closePopup}
                                          />
                                      </div>
                                  ))
                              }


                              <div className='pagination'>
                                  <button
                                      onClick={() => paginationHandler("minus")}> {"<"} </button>
                                  <button
                                      style={currentPage === 1 ? paginationStyle : null}
                                      onClick={() => paginationHandler(1)}>1</button>

                                  <button
                                      style={currentPage === 2 ? paginationStyle : null}
                                      onClick={() => paginationHandler(2)}>2</button>
                                  <button
                                      onClick={() => paginationHandler("plus")} > {">"} </button>
                              </div>
                          </div>

                          {showPopup && (
                              <div className='userShow-main'>


                                  <Popup
                                      className='popup-main'
                                      selectedUser={selectedUser} />

                              </div>

                          )}
                      </div>
                  </div>
              )
      );
  }; */
