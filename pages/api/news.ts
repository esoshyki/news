import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import NewsAPI from 'newsapi';

export default async function News (req: NextApiRequest, res: NextApiResponse) : Promise<any> {

  const newsApi = new NewsAPI(process.env.NEWS_APIKEY);

  const response = await newsApi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  });

  res.json(response);

}