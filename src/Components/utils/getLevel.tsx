import level from '../Level/levelType'

type GetLevel = (cLevel: string | null) => number
const getLevel:GetLevel = (cLevel: string | null) =>  {
    return Object.keys(level).findIndex((l: string) => level[l as keyof typeof level] === cLevel)
}

type GetLevelFromID = (id: number) => keyof typeof level
const getLevelFromId:GetLevelFromID = (id: number) => {
    return Object.keys(level)[id] as keyof typeof level
}
    
export { getLevel, getLevelFromId }