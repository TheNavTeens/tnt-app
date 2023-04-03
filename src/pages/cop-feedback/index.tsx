import React from 'react';

class CoPFeedback extends React.Component {
    componentDidMount () {
        let session = "teaching";

        if (session == "teaching") {
        // Teaching Session feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd1Z5n3LjQIdw5hMavBcqXxA81iez5vWE3ME5fQsgF-tz_GPQ/viewform?usp=sf_link";
        } else if (session == "discussion") {
        // Discussion Session Feedback
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSenrheUf5MggB-AY5hNHWiIrrb3Dj6hfELftkVt3yy7rGMvSA/viewform?usp=sf_link";
        }
    }

    render () {
        return (
            <div>Please wait while we re-direct you</div>
        )
    }
}

export default CoPFeedback;
