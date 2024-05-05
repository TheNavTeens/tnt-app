import React from 'react';

class CoPFeedback extends React.Component {
    componentDidMount () {
        let session = "discussion";

        if (session == "teaching") {
        // Teaching Session feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd1Z5n3LjQIdw5hMavBcqXxA81iez5vWE3ME5fQsgF-tz_GPQ/viewform?usp=sf_link";
        } else if (session == "discussion") {
        // Discussion Session Feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeZbWzCeMnao-z7DzK-_fjQsO94tPu81sglq5p9w6O_Q9TNJQ/viewform?usp=sf_link";
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
