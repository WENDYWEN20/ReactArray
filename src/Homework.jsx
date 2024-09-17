import { useState } from "react";
import "./App.css";
import Learner from "./components/Learner";
// import Form from './components/Form'


// Adding new learners:
//     1. Create a form with an input for the name and the bio.
//    2. Create the state for the inputs.
//    3. Attach state to your inputs
//    4. Create handleChange handler for inputs
//    5. Create handleSubmit that creates a literal object and uses the state data for the values of the object. (scores can be an empty array)
//    6. Finally update your learnersData adding the new object to the beginning of the array.}

const data = [
  {
    name: "Cait Yomorta",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
    scores: [
      {
        date: "2018-02-08",
        score: 77,
      },
      {
        date: "2018-04-22",
        score: 92,
      },
      {
        date: "2018-09-15",
        score: 68,
      },
    ],
  },
  {
    name: "Holly Baird",
    bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
    scores: [
      {
        date: "2018-12-14",
        score: 88,
      },
      {
        date: "2019-01-09",
        score: 79,
      },
      {
        date: "2019-02-23",
        score: 91,
      },
      {
        date: "2019-03-01",
        score: 95,
      },
    ],
  },
  {
    name: "Wes Mungia",
    bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
    scores: [
      {
        date: "2018-10-11",
        score: 62,
      },
      {
        date: "2018-11-24",
        score: 74,
      },
      {
        date: "2018-12-19",
        score: 85,
      },
    ],
  },
];





function Homework() {
  const [learnersData, setLearnersData] = useState({ learners: data });
  const [formData, setFormData] = useState({ name:"", bio:"",});
  const handleChange=(e) =>{
    setFormData({...formData,
        [e.target.name]:e.target.value
    })}

   const handleSubmit=(e) =>{
    e.preventDefault();
    console.log(formData); 

    const newLearner={...formData, scores:[]}
    //updating the learnersData with the newLearner

   setLearnersData({learners:[newLearner,...learnersData.learners]})
    setFormData({name:"", bio:""  })
    }
    

  return (
    <>
<h1>Learner App</h1>
<form onSubmit={handleSubmit}>
    <label htmlFor="name">Name: </label>
    <input type="text" name='name' value={formData.name} onChange={handleChange}/>
<br />
    <label htmlFor="bio">Bio:</label>
    <input type="text" name='bio' value={formData.bio} onChange={handleChange}/>
    <br />
    <input type="submit" value='add'/>
</form>
{learnersData.learners.map((learner, index) => {
        return <Learner learner={learner} key={index}/>
      })}
    </>
  );
}

export default Homework