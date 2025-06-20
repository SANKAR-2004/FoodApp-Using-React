import { useParams } from "react-router-dom"; 

const AboutUs = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <h2>Message Form</h2>
            <form className="p-4 border-2">
                <input type="text" className="p-2 m-2 border-black border-1" placeholder="Name" /> 
                <input type="text" className="p-2 m-2 border-black" placeholder="Message" />
                <button className="p-2 m-2 border border-black">Submit</button>
            </form>
        </div>
    );
}

export default AboutUs;