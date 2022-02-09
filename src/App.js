import './App.css';
import React,{useState,useEffect} from "react"
import axios from "axios"
import {APIKEY} from './components/Api'
import CardImages from './components/CardImages';


function App() {

  const [images,setImages] = useState([]);
  const [isloading,setIsLoading] = useState(true);
  const [term,setTerm] = useState("")

  useEffect(()=>{
    axios.get(`https://pixabay.com/api/?key=${APIKEY}&q=${term}&image_type=photo&pretty=true`).then((Response)=>{
      setImages(Response.data.hits);
      setIsLoading(false);
    })
  })

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {images.map(image =>(
          <CardImages key={image.id} image={image}/>
        ))}

      </div>
    </div>
  );
}

export default App;
