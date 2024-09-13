import { RESTMethods } from "msw"

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FAVS":
            return { ...state, favs: [...state.favs, action.payload] };
            case "SET_DENTISTA":
            return{...state, dentistas: action.payload}
        case "SET_THEME":
            return{...state, theme: action.payload}
        case "REMOVE_FAVS":
            const filteredFavs = state.favs.filter(
                (fav) => fav.id !== action.payload.id
              );
              return { ...state, favs: filteredFavs };
    }
}