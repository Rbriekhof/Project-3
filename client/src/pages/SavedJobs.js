import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedJobs"

class SavedJobs extends Component {
    state = {
        savedJobs: []
    };

    componentDidMount() {
        console.log("did mount")
        console.log(this.savedJobs);
        API.getTasks()
            .then(res => this.setState({ savedJobs: res.data }))
            .catch(err => console.log("failed"))
    }

    handleStatusUpdateClick = (id, status) => {
        API.updateTask(id, { jobStatus: status })
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    handleDeleteTaskClick = id => {
        API.deleteTask(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                {console.log("before SavedResult")}
                <Container>
                {console.log("entered into container")}
                    <SavedResult savedJobs={this.state.savedJobs}
                        handleStatusUpdateClick={this.handleStatusUpdateClick}
                        handleDeleteTaskClick={this.handleDeleteTaskClick}/>
                </Container>
            </Container>
        )
    }
}



export default SavedJobs
