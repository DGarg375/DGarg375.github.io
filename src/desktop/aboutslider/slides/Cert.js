import './Cert.css';

const cert = {
    cert_1: {
        title: "JavaScript Algorithms and Data Structures on FreeCodeCamp",
        imgURL: "https://freecodecamp.org/certification/divgarg2001/javascript-algorithms-and-data-structures",
    }, 
    cert_2: {
        title: "Full Stack Web Development on Udemy by Colt Steele",
        imgURL: "",
    },
    cert_3: {
        title: "Machine Learning in Python on Coursera by Andrew Ng",
        imgURL: "",
    }
}

const Cert = () => {
    return(
        <>
            <p>{cert.cert_1.title}</p><br></br>
            <p>{cert.cert_2.title}</p><br></br>
            <p>{cert.cert_3.title}</p><br></br>
        </>
    );
};

export default Cert;