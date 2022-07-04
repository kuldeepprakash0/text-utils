import React from "react";

export default function About(props) {
    // const [count, setCount] = useState(0);
    // const [btnText, setbtnText] = useState("Enable dark mode");
    // const [myStyle, setMystyle] = useState(
    //     {
    //         color: "black",
    //         backgroundColor:"white"
    //     }
    // );
    let myStyle ={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'black':'white'
    }
    // const toggleStyle =()=>{
    //     if(myStyle.color==="black"){
    //             setMystyle({
    //                 color:"white",
    //                 backgroundColor:"black"
    //             });
    //             setbtnText("Enable light mode");
    //         }
    //     else{
    //         setMystyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         });
    //         setbtnText("Enable dark mode");
    //     }
    //     }
    
   
    
  return (
    <div className="container my-5 py-3 rounded" style={myStyle}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
            style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              KULDEEP PRAKASH --react developer
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>P E R S O N A L P R O F I L E : </strong> I am B.tech Graduate (fresher) Passionate about
              coding. I love to learn new things. I have excellent
              problem-solving skills and the ability to perform
              well in a team. <code>Certified MERN stack developer</code>  linkedin.com/in/kuldeepprakash
              
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
            style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              E D U C A T I O N A L H I S T O R Y
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>B.tech : </strong>B.Tech
              Computer Science and Engineering | Final Year 2021<code>HEMVATI NANDAN BAHUGUNA GARHWAL
              UNIVERSITY A Central University</code>,
              Percentage: 65%
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
            style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              TextUtils app
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Some of its features: </strong> Word Counting.
              Removing Extra spaces.
              Capitalizing the text of the document.
              Adding Lowercase and uppercase to the text. <code>--kuldeep prakash</code>,
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="conatiner my-4">
          <button type="button" className="btn btn-primary mx-2" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
