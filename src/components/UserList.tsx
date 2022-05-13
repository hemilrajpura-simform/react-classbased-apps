import React, { CSSProperties } from "react";
import UserItem from "./UserItem";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import "./UserList.css";
import Popup from "./Popup";
import Loading from "./Loading";
import { Moon, Sun } from "react-feather";

interface UserListType {
    showPopup: boolean,
    selectedUser: string | number | null,
    pageFound: boolean,
    pageLoading: boolean,
    currentPage: number|string,
    user: string[],
    darkMode:boolean,
    darkModeStyle:CSSProperties,
    darkModeHandler:()=>void
}
class UserList extends React.Component<UserListType,any> {
    constructor(props:UserListType) {
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

    paginationHandler = (number:string | number) => {
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
    showPopupHandler = (item:  {id: React.Key | null | undefined,first_name: string,last_name: string,avatar: any,email: any,status: any,access: string}): void => {
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
            .catch((error) => console.log(error));
            
    }
    render() {
        return (
            <>
            {this.state.pageLoading && <Loading />} 
            {this.state.pageFound && <PageNotFound paginationHandler={this.paginationHandler} />} 
            <div>
                <div className='main-container' style={this.props.darkMode ? this.props.darkModeStyle : undefined} onMouseLeave={this.closePopup}>
                    <div className='user-list-main' style={this.props.darkMode ? this.props.darkModeStyle : undefined}>
                        <div className='darkMode-main'>

                            <button onClick={this.props.darkModeHandler} id="darkMode-btn">
                                {this.props.darkMode ? <Sun /> : <Moon />}
                                
                            </button>
                        </div>

                        <Header />
                        {
                            this.state.user.map((item: { id: React.Key | null | undefined; first_name: string; last_name: string; avatar: any; email: any; status: any; access: string; }) => (
                                <div key={item.id} style={this.props.darkMode ? this.props.darkModeStyle : undefined} >
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
                                style={this.state.currentPage === 1 ? this.paginationStyle :undefined}
                                onClick={() => this.paginationHandler(1)}>1</button>

                            <button
                                style={this.state.currentPage === 2 ? this.paginationStyle : undefined}
                                onClick={() => this.paginationHandler(2)}>2</button>
                        
                        </div>
                    </div>

                    {this.state.showPopup && (
                        <div className='userShow-main'>
                            <Popup
                                className='popup-main'
                                selectedUser={this.state.selectedUser} />
                            <div></div>
                        </div>
                    )}
                </div>
            </div>
        </>)
    }
}
export default UserList;