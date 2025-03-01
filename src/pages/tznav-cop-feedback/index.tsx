import React from 'react';

class TzNavCoPFeedback extends React.Component {
    componentDidMount () {
        let session = "disciple-making";

        if (session == "disciple-making") {
        // Discussion Session Feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScd0eAMO4UUfRFZ3k2alPrScYPbts--fsho960BSZFpdiaUqA/viewform?usp=header";
        } else if (session == "leadership") {
        // Retreat Session Feedback
            window.location.href = "";
        } else if (session == "vision") {
        // Retreat Session Feedback
            window.location.href = "";
        } else if (session == "intention") {
        // Retreat Session Feedback
            window.location.href = "";
        }
    }

    render () {
        return (
            <div>Please wait while we re-direct you</div>
        )
    }
}

export default TzNavCoPFeedback;
