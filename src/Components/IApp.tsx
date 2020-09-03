import LevelTypeGameOst from './Level/LevelGameOstType'

interface IOption {
    stage: LevelTypeGameOst,
    answer: null | number,
    answerName: string,
    isAnswered: boolean,
  }
  
interface IUserOption {
    score: number,
    id: number,
    isBirdClick: boolean,
}

interface IStore {
    id: number;
    name: string;
    publisher: string;
    description: string;
    image: string;
    audio: {default: string};
}

export { IOption, IUserOption, IStore }