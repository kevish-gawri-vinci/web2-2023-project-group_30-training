import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import LeaderboardPage from '../Pages/LeaderboardPage';
import RegisterPage from '../Pages/RegisterPage';
import CommandsPage from '../Modals/CommandsPage';
import ShopPage from '../Pages/Shop';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/login': LoginPage,
  '/leaderboard': LeaderboardPage,
  '/register': RegisterPage,
  '/commands': CommandsPage,
  '/shop': ShopPage
};

export default routes;
