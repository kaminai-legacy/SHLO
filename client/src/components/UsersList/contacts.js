import React, {Component} from 'react';
import Contact from './contact/contact';
import style from './contacts.module.scss';
import { userBaned } from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
        this.clickOnSelect = this.clickOnSelect.bind(this);
    }

    notify = () => toast.error("You cannot ban administrators", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 6000,
    });

    clickOnSelect = (id,status) => {
this.props.userBaned(id,status);
    };

//<button onClick={this.notify}>Notify !</button>

    render() {

        const arrayUsers = [];
        for (let i = 0; i < this.props.array.length; i++) {
            const func = (this.props.array[i].role==="USER")?this.clickOnSelect:this.notify;
            const status = (this.props.array[i].role==="USER")?this.props.array[i].customerStatus:this.props.array[i].role;
            arrayUsers.push(<span key={this.props.array[i].id}>
                <div key={this.props.array[i].id} className={style.contact}>
                        <Contact
                        click={func}
                        id={this.props.array[i].id}
                        img={"http://www.simonhoegsberg.com/faces_of_new_york/images/11_faces.jpg"}
                        name={this.props.array[i].firstName + "   " + this.props.array[i].lastName }
                        displayName={this.props.array[i].displayName}
                        position={status}
                        isBanned={this.props.array[i].isBaned}
                         />
                </div>
                  <div className={style.line}/>
            </span>);
        }
        return (
            <div className={style.list}>

                    {arrayUsers}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        users:state.getAllUsersReducer.data
    };
};
const mapDispatchToProps = (dispatch) => ({
    userBaned: (id,status) => dispatch(userBaned(id,status)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);
