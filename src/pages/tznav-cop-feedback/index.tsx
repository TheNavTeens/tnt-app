import React from 'react';

class TzNavCoPFeedback extends React.Component {
    componentDidMount () {
        let session = "disciple-making";

        if (session == "disciple-making") {
        // Discussion Session Feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdNuzoHu3y2LL3Rl9qzlrz7QGbAMCUgHeIeOvOA-ZiL9uJIDQ/viewform?usp=sf_link";
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
