import './index.css';
import Cert from './Cert';
import Divyansh from './Divyansh';
import Skills from './Skills';
import Education from './Education';

const CurrentSlide = (props) => {
    const slideName = props.slideName;
    if(slideName === "divyansh") {
        return(
            <div class="slide-base"><Divyansh /></div>
        );
    } else if(slideName === "educt") {
        return(
            <div class="slide-base"><Education /></div>
        );
    } else if(slideName === "skill") {
        return(
            <div class="slide-base"><Skills /></div>
        );
    } else if(slideName === "certif") {
        return(
            <div class="slide-base"><Cert /></div>
        );
    }
}

export default CurrentSlide;