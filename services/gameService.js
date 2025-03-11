import Game from "../models/Games.js";

class gameService {
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar jogos
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        // title : title
        title,
        platform,
        year,
        price,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`)
    } catch {
      console.log(error);
    }
  }
}

export default new gameService();
