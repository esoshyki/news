import { CategoryType, LanguageType, CountriesType, SortedByType } from "./types";

const NewsAPI = require('newsapi');

export interface AllNewsQuery {
  category?: typeof CategoryType[number];
  language: typeof LanguageType[number];
  country?: typeof CountriesType[number];
  q?: string;
  qInTitle?: string;
  from?: string;
  to?: string;
  pageSize: number;
  page: number,
  sortedBy: typeof SortedByType[number];
};

export interface HeadLineNewsQuery {
  category?: typeof CategoryType[number];
  country?: typeof CountriesType[number];
  q?: string;
  pageSize: number;
  page: number,   
}

export const getAllNews = async (params: AllNewsQuery) => {
  const newsApi = new NewsAPI(process.env.NEWS_APIKEY);

  try {
    const response = newsApi.v2.everything(params);
    return response;
  } catch(err: any) {
    return err.message;
  }
};

export const getHeadLineNews = async (params: HeadLineNewsQuery) => {
  const newsApi = new NewsAPI(process.env.NEWS_APIKEY);

  try {
    const response = newsApi.v2.topHeadlines(params);
    return response;
  } catch(err: any) {
    return err.message;
  }
};


