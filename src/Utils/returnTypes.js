import bug from "../assets/bug.png"
import dark from "../assets/dark.png"
import dragon from "../assets/dragon.png"
import eletric from "../assets/eletric.png"
import fairy from "../assets/fairy.png"
import fighting from "../assets/fighting.png"
import fire from "../assets/fire.png"
import flying from "../assets/flying.png"
import gost from "../assets/gost.png"
import grass from "../assets/grass.png"
import ground from "../assets/ground.png" 
import ice from "../assets/ice.png"
import normal from "../assets/normal.png"
import poison from "../assets/poison.png"
import psychic from "../assets/psychic.png"
import rock from "../assets/rock.png"
import steel from "../assets/steel.png"
import water from "../assets/water.png"


export const returnTypes = (type) => {
    
    switch(type){
        case"bug":
            return bug;
        case"dark":
            return dark;
        case "dragon":
            return dragon;
        case "eletric":
            return eletric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "gost":
            return gost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return normal;
    }
}