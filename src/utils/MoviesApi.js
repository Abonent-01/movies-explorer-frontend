import {BASE_URL_MOVIES} from "./constants";

const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json()
  } else {
    throw new Error(`Error: ${res.status}`)
  }
}

export const getMoviesData = async () => {
  try {
    const response = await fetch(BASE_URL_MOVIES)

    return await checkResponse(response)
  } catch (err) {
    console.error(err)
  }
}
