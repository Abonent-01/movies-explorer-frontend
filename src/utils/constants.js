//export const BASE_URL="http://localhost:3000"
export const BASE_URL="https://api.server.students.nomoreparties.co"
export const SERVER_URL="https://api.nomoreparties.co"
export const BASE_URL_MOVIES="https://api.nomoreparties.co/beatfilm-movies"

export const INITIAL_NUMBER_OF_CARDS_1280 = 12
export const INITIAL_NUMBER_OF_CARDS_768 = 8
export const INITIAL_NUMBER_OF_CARDS_320 = 5
export const CARDS_TO_ADD_1280 = 3
export const CARDS_TO_ADD_768 = 2
export const CARDS_TO_ADD_320 = 2
export const SCREEN_WIDTH_L = 1280
export const SCREEN_WIDTH_M = 766
export const SHORT_MOVIES = 40

const EMAIL_OR_PASSWORD_ERROR="Wrong passeord or Email."
const TOKEN_ERROR="Somthing Wrong with Token ."
const CONFLICT_ERROR="User Already Registred."
const REGISTER_ERROR="Error."
const EDIT_PROFILE_ERROR="Error."
const SERVER_ERROR="Server Error."

export function handleMessageErrors(error, pathname) {
  if (error === "Error: 400" && pathname === '/signin') return TOKEN_ERROR
  if (error === "Error: 401" && pathname === '/signin') return EMAIL_OR_PASSWORD_ERROR
  if (error === "Error: 409" && pathname === '/signin') return CONFLICT_ERROR
  if (error === "Error: 409" && pathname === '/signup') return CONFLICT_ERROR
  if (error === "Error: 400" && pathname === '/signup') return REGISTER_ERROR
  if (error === "Error: 400" && pathname === '/profile') return EDIT_PROFILE_ERROR
  if (error === "Error: 409" && pathname === '/profile') return CONFLICT_ERROR

  else return SERVER_ERROR
}

export const NAME_SPAN_ERROR="Используйте минимум 2 и максимум 30 символов. Только буквы, дефис или пробел"
export const EMAIL_SPAN_ERROR="Use Email"
export const PASSWORD_SPAN_ERROR="Используйте минимум 6 символов, включая латинские буквы (по крайней мере, одна заглавная буква), цифры и специальные символы"
