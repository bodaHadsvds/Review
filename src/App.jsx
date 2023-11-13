import People from './data'
import { useState } from 'react';
import { FaChevronLeft,FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const App = () => {
 const [Index , setIndex] = useState(0);
 const {name,image,text,job} = People[Index];

const checknumber =(number)=>{
  if (number > People.length -1){
    return 0;
  }
  if (number< 0) {
    return People.length-1
  }
  return number

}

 const randomperson = ()=>{
let randomNumber = Math.floor(Math.random() * People.length)
if(randomNumber ===Index ){
  randomNumber = Index +1
}
setIndex(checknumber(randomNumber))
 }
 const pervPreson=()=>{
  setIndex((currentIndex)=>{
    const newindex = currentIndex + 1
    if (newindex > People.length -1 ){
     return 0;
    };
    return newindex
  }) ;

 } 
 const NexPerson =() =>{
  setIndex((currentIndex)=>{
    const newindex = currentIndex - 1
    if (newindex < 0 ){
      return  People.length -1;
     };
    return newindex
  }) ;
 }

  return <main> 
    <article className='review'> 
       <div className="img-container">   <img  className="person-img"   src={image} alt={name}/> 
         <span className='quote-icon'>
         <FaQuoteRight/>
       </span>
        </div>
     
       <h4 className='author'>{name}</h4>
       <p className='job'>{job}</p>
       <p className='info'>{text}</p>
       <div className="btn-container">
        <button className='prev-btn' onClick={()=>pervPreson()}> <FaChevronLeft className='beer' /> </button>
        <button className='next-btn' onClick={()=>NexPerson()} >  <FaChevronRight className='beer'/> </button>
       </div>
       <button className='btn btn-hipster' onClick={randomperson}> surprise me</button>
   </article>
  </main>;
};
export default App;
