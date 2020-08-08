import LevelType from './Level/levelType'

interface IOption {
    stage: LevelType,
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
    species: string;
    description: string;
    image: string;
    audio: string;
}

export { IOption, IUserOption, IStore }