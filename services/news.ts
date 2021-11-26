import { CategoryType, LanguageType, CountriesType, SortedByType } from "./types";

const NewsAPI = require('newsapi');

interface AllNewsQuery {
  category?: typeof CategoryType;
  language: typeof LanguageType;
  country?: typeof CountriesType;
  q?: string;
  qInTitle?: string;
  from?: string;
  to?: string;
  pageSize: number;
  page: number,
  sortedBy: typeof SortedByType;
};

interface HeadLineNewsQuery {
  category?: typeof CategoryType;
  country?: typeof CountriesType;
  q?: string;
  pageSize: number;
  page: number,   
}

const getAllNews = async (params: AllNewsQuery) => {
  const newsApi = new NewsAPI(process.env.NEWS_APIKEY);

  try {
    const response = newsApi.v2.everything(params);
    return response;
  } catch(err: any) {
    return err.message;
  }
};

const getHeadLineNews = async (params: HeadLineNewsQuery) => {
  const newsApi = new NewsAPI(process.env.NEWS_APIKEY);

  try {
    const response = newsApi.v2.topHeadlines(params);
    return response;
  } catch(err: any) {
    return err.message;
  }
};

export default ({
  getAllNews,
  getHeadLineNews
})
