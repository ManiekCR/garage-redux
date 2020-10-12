// TODO: add and export your own actions
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';

export function fetchCars(garage) {
  const url = `${ROOT_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function addCar(garage, car, callback) {
  const request = fetch(`${ROOT_URL}/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);

  return {
    type: ADD_CAR,
    payload: request
  };
}
