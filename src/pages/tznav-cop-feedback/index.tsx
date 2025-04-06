import React from 'react';

class TzNavCoPFeedback extends React.Component {
  componentDidMount() {
    let session = "leadership";

    if (session == "disciple-making") {
      // Discussion Session Feedback
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScd0eAMO4UUfRFZ3k2alPrScYPbts--fsho960BSZFpdiaUqA/viewform?usp=header";
    } else if (session == "leadership") {
      // Retreat Session Feedback
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfpWYV6Ar7RAG-r3ySULHdVtmbuYpp40TaqUgrKZUn_o0UEWg/viewform?usp=header";
    } else if (session == "vision") {
      // Retreat Session Feedback
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSduCN3Riyp8njuFcJmoThfonuq77Q8w4X49LTKnG4xZkUgBJA/viewform?usp=header";
    } else if (session == "intention") {
      // Retreat Session Feedback
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScQpWghtg9bwLds6-v6mpf9dwcrRAmQGESIe3bEu_o6MGatuw/viewform?usp=header";
    }
  }

  render() {
    return (
      <div>Please wait while we re-direct you</div>
    )
  }
}

export default TzNavCoPFeedback;
