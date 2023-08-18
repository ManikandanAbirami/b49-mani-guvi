import React from 'react'
import { useParams } from 'react-router-dom'

function Diet() {
    const { dietName } = useParams(); // Get the URL param "name"
    
    const dietInfo = {
        lowCarb: "Low carb is best diet for weight loss!!",
        highProtein: "High protein is best diet for muscle growth!!",
        lowFat: "Low fat is best diet for fat loss!!!"
    };

    const info = dietInfo[dietName];

    return (
    <div>
        <h2>{dietName}</h2>
        <p>{info}</p>
    </div>
  )
}

export default Diet