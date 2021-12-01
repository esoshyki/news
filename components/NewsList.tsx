import { useEffect, useState } from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { getAllNews} from '../services/news';
import { AllNewsQuery } from '../services/news';
import { CategoryType, LanguageType, CountriesType, SortedByType } from "../services/types";


const NewsList = () => {

  const state = useSelector(state => state);
  const dispatch: AppDispatch = useDispatch();

  const initialParams: AllNewsQuery = {
    language: "en",
    
  }

  const [queryParams, setQueryParams] = useState({

  })
  console.log(state);

  useEffect(async () => {
    try { 
      const result = await getAllNews()
    } catch (error: any) {
      console.log(error.message)
    }
  }, [])

  return (
    <div>

    </div>
  )
};

export default NewsList;