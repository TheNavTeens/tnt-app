import React from 'react';

class CoPFeedback extends React.Component {
    componentDidMount () {
        let session = "regular";

        if (session == "regular") {
        // Discussion Session Feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeJAFyTXoaie-HA19VWjI__Vt4CLdfAZ7xizkuxZ6cJTCpI8w/viewform?usp=dialog";
        } else if (session == "retreat") {
        // Retreat Session Feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScUDhMAouPXL4z4XLO6-gaqqLUgiEaDrCBcJ6Ssw1klJCpolg/viewform?usp=sf_link";
        }
    }

    render () {
        return (
            <div>Please wait while we re-direct you</div>
        )
    }
}

export default CoPFeedback;
