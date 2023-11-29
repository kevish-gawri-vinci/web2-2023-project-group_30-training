import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import Leaderboard from '../Pages/Leaderboard';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/leaderboard':Leaderboard,
};

export default routes;
