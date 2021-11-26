interface Article {
  source: {
    id: string,
    name: string
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlImage: string;
  publishAt: string;
  content: string
}

enum NewsActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
};

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
};

interface FetchNewsSuccess {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: any;
};

interface FetchNewsError {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

type NewsAction = FetchNewsAction | FetchNewsSuccess | FetchNewsError;

interface NewsType {
  articles: any[];
  loading: boolean,
  error: null | string
}

const initialState: NewsType = {
  articles: [],
  loading: false,
  error: null
};

export const newsReducer = (state = initialState, action: NewsAction) : NewsType => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return ({loading: true, error: null, articles: []})
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return ({loading: false, error: null, articles: action.payload})
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return ({loading: false, error: action.payload, articles: []})
  }
  return state;
};





