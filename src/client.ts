import { ClientOptions, apiProvider, httpMethods } from './apiProvider';
import {
  abuseRequests,
  achievements,
  animes,
  appears,
  bans,
  calendars,
  characters,
  clubs,
  comments,
  constants,
  dialogs,
  episodeNotifications,
  favorites,
  forums,
  friends,
  genres,
  mangas,
  people,
  publishers,
  ranobe,
  reviews,
  stats,
  studios,
  styles,
  topicIgnores,
  topics,
  userIgnores,
  userImages,
  userRates,
  users,
  videos,
} from './endpoints';

/**
 * A Shikimori API wrapper that provides methods for interacting with various endpoints
 * @param options - The options to configure the client, including the base URL, OAuth2 credentials, etc.
 * @returns An object containing methods for interacting with various endpoints, as well as a function for setting the access token
 */
export const client = (options: ClientOptions) => {
  const [request, setAccessToken] = apiProvider(options);
  const methods = httpMethods(request);

  return {
    /**
     * Sets the access token for an OAuth2 clientName
     * @param token - The access token to set
     */
    setAccessToken: setAccessToken,

    abuseRequests: abuseRequests(methods),
    achievements: achievements(methods),
    animes: animes(methods),
    appears: appears(methods),
    bans: bans(methods),
    calendars: calendars(methods),
    characters: characters(methods),
    clubs: clubs(methods),
    comments: comments(methods),
    constants: constants(methods),
    dialogs: dialogs(methods),
    episodeNotifications: episodeNotifications(methods),
    favorites: favorites(methods),
    forums: forums(methods),
    friends: friends(methods),
    genres: genres(methods),
    mangas: mangas(methods),
    people: people(methods),
    publishers: publishers(methods),
    ranobe: ranobe(methods),
    reviews: reviews(methods),
    stats: stats(methods),
    studios: studios(methods),
    styles: styles(methods),
    topicIgnores: topicIgnores(methods),
    topics: topics(methods),
    userIgnores: userIgnores(methods),
    userImages: userImages(methods),
    userRates: userRates(methods),
    users: users(methods),
    videos: videos(methods),
  };
};
