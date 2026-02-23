import React from 'react';

class TzNavCoPFeedback extends React.Component {
  componentDidMount() {
    let session = "disciple-making";

    if (session == "disciple-making") {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdxSqFhKE7SGL66jWbtCWlA8PgnQHQzwAfnc7jN_gAZ4LZHiA/viewform?usp=header";
    } else if (session == "leadership") {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeJa4h_0fOyfqA40zwGVgkEg-5056DUgrb5uFOq5yFEy7hazA/viewform?usp=header";
    } else if (session == "vision") {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSef-gI8V6xpsD_UjbmeYSLUZ0qMKR6vrNzpRLUKptbBLOimLg/viewform?usp=header";
    } else if (session == "intention") {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd4hA2FGwYDoOCSLWrg5yoiIJROJxp9GjUA-0wa5pLYOWfrSg/viewform?usp=header";
    }
  }

  render() {
    return (
      <div>Please wait while we re-direct you</div>
    )
  }
}

export default TzNavCoPFeedback;
