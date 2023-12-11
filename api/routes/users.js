const express = require('express');
const {
  readOneUserFromUsername,
  updateUserData,
  jsonDbPath,
  defaultUsers,
} = require('../models/users');
const { authorize } = require('../utils/auths');
const { parse } = require('../utils/json');

const router = express.Router();

/* GET users listing. */

// Nouvelle route pour obtenir les données de profil d'un utilisateur
router.get('/profil/:username', (req, res) => {
  const { username } = req.params;
  const user = readOneUserFromUsername(username);

  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  // Renvoie les informations nécessaires pour la page de profil
  res.json({
    username: user.username,
    birthdate: user.birthdate,
    score: user.score,
  });
});

// eslint-disable-next-line consistent-return
router.post('/update-score', authorize, async (req, res) => {
  const { newScore } = req.body;
  const { username } = req.user; // Récupérer le nom d'utilisateur du middleware 'authorize'

  const user = readOneUserFromUsername(username);
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  if (newScore > user.score) {
    user.score = newScore;
    await updateUserData(user);
    res.json({ success: true, message: 'Score mis à jour' });
  } else {
    res.json({ success: false, message: 'Le nouveau score n est pas plus élevé' });
  }
});

router.get('/classement', (req, res) => {
  const usersleaderboard = parse(jsonDbPath, defaultUsers);
  usersleaderboard.sort((a, b) => b.score - a.score);
  res.json(usersleaderboard.map((user) => ({ username: user.username, score: user.score })));
});

module.exports = router;
