import ReactVideoTrimmer from "react-video-trimmer";
import "react-video-trimmer/dist/style.css";

function Video() {
    return (
      
        <div style={{height: 50}}>
        <ReactVideoTrimmer timeLimit={20} showEncodeBtn />
        </div>

    );
  }
export default Video;