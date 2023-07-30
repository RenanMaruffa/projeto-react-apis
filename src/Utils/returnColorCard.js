export const returnColorCard = (type) => {
    switch (type){
        case "grass":
        return "#729F92;";
        case "water":
            return "#71C3FF;";
        case "fire":
            return "#EAAB7D;";
        case "poison":
            return "#D1A3D0;";
        case "normal":
            return "#BF9762;";
        case "flying":
            return "#A891EC;";
        case "bug":
            return "#76A866;";
        case "dark":
            return "#55433C;";
        case "dragon":
            return "#004170;";
        case "fairy":
            return "#BD7886;";
        case "electric":
            return "#FFC95E;";
        case "fighting":
            return "#B0385A;";
        case "steel":
            return "#B7B9D0;";
        case "ghost":
            return "#7084CA;";
        case "ground":
            return "#B6866F;";
        case "rock":
            return "#9E8F65;";
        case "ice":
            return "#48A497;";
        case "psychic":
            return "#E05E65;";
        default:
            return "#BF9762;";
    }
}