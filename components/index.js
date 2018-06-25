import { connect } from "react-redux";
import AppContainer from "./presenter.js";

const mapStateToProps = (state,ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        profile: null
    }
}



export default connect(mapStateToProps)(AppContainer);