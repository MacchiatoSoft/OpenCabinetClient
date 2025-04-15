import { useState, useEffect } from 'react'
import{ useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './App.css'

function App() {
  
  const{ data } = useQuery({
    queryKey: ["ping"],
    queryFn: getPing
  });

  return (
   <>
    <div>
      {data}
    </div>
   </>
  )
}

const getPing = async() => {
  const response = await fetch("http://localhost:5000/ping");
  const text = await response.text();
  return text;
}

export default App
