
import { useState } from "react";
import 'animate.css';
function FrecuentlyAskedQuestions(){
        
        const Question = ()=>{
            const [isVisible,setIsVisible] = useState(false)
            const handleClick = ()=>{
                setIsVisible(!isVisible);
            }
            return(
                <div>
                    <div className="question">
                        <h5 onClick={handleClick}>Pulvinar nostrud class cum facilis?</h5>
                        {isVisible && <p>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.</p>}
                    </div>
                </div>
            )
        }

    return(
        <div className="FrecuentlyAskedQuestions">

            <h4>Frequently Asked Question!</h4>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="leaf"></img>
            
            <div className="QuestionContainerWrapper">

                <div className="QuestionsContainer">
                    <Question></Question>
                    <Question></Question>
                    <Question></Question>
                    <Question></Question>
                </div>

                <div className="QuestionsContainer">
                    <Question></Question>
                    <Question></Question>
                    <Question></Question>
                    <Question></Question>
                </div>

            </div>

        </div>
    )
}export default FrecuentlyAskedQuestions;