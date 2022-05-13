
import React from 'react';
import './UserList';


class Popup extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }


    MonthlyClicks = Math.floor(Math.random() * 10000);
    clicksReviewed = Math.floor(Math.random() * 10000);
    planUses = Math.floor(Math.random() * 100);
    planUsesStyle = {
        width: this.planUses + '%'
    };
    
    render() {
        return (
            <div>

                <img src={this.props.selectedUser.image} alt='' />
                <h4>{this.props.selectedUser.username} </h4>
                <p>{this.props.selectedUser.email}</p>
                <h3>Your Plan: Standard</h3>
                <button>Active User</button>
                <h5>Plan Uses</h5>
                <div className='plan-uses-line' style={this.planUsesStyle}> </div>

                <div className='statistic-main'>
                    <div className='reviewed'>
                        <h2>{this.clicksReviewed}</h2>
                        <p>clicks reviewed</p>
                    </div>
                    <div className='statistic-line'></div>
                    <div className='clicks'>
                        <h2>{this.MonthlyClicks}</h2>
                        <p>Monthly clicks</p>
                    </div>
                </div>
            </div >
        )
    }
};
export default Popup;



// const Popup = (props:any) => {


//     var MonthlyClicks = Math.floor(Math.random() * 10000);
//     var clicksReviewed = Math.floor(Math.random() * 10000);
//     var planUses = Math.floor(Math.random() * 100);
//     const planUsesStyle = {
//         width: planUses + '%'
//     };

//     return (
//         <div>

//             <img src={props.selectedUser.image} alt='' />
//             <h4>{props.selectedUser.username} </h4>
//             <p>{props.selectedUser.email}</p>
//             <h3>Your Plan: Standard</h3>
//             <button>Active User</button>
//             <h5>Plan Uses</h5>
//             <div className='plan-uses-line' style={planUsesStyle}> </div>
      
//             <div className='statistic-main'>
//                 <div className='reviewed'>
//                     <h2>{clicksReviewed}</h2>
//                     <p>clicks reviewed</p>
//                 </div>
//                 <div className='statistic-line'></div>
//                 <div className='clicks'>
//                     <h2>{MonthlyClicks}</h2>
//                     <p>Monthly clicks</p>
//                 </div>
//             </div>

//         </div>
//     );
// };
// export default Popup;