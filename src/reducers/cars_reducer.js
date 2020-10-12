import { FETCH_CARS, FETCH_CAR, REMOVE_CAR } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case REMOVE_CAR:
      return state.filter(car => car !== action.payload);
    default:
      return state;
  }
}
