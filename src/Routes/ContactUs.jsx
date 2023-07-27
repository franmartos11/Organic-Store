import ContactUsInfoCards from "../Components/ContactUs/ContactUsInfoCards";
import FrecuentlyAskedQuestions from "../Components/About/AboutUsNumbers";
import HeaderContactUs from "../Components/ContactUs/HeaderContactUs";

const ContactUs =()=>{
    return(
        <div>
            <HeaderContactUs></HeaderContactUs>
            <ContactUsInfoCards></ContactUsInfoCards>
            <FrecuentlyAskedQuestions></FrecuentlyAskedQuestions>
        </div>
    )
}
export default ContactUs;