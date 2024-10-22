import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constants';


const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={BACKGROUND_IMAGE} alt="" aria-hidden="true"/>
        </div>
        <div>
            <GptSearchBar/>
        </div>
        <div>
            <GptMovieSuggestion/>
        </div>
    </div>
  )
}

export default GptSearch