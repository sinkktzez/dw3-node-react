import gameService from "../services/gameService.js";

const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requesição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllGames };
