import { BASE_URL } from "./constants";

const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json()
  } else {
    throw new Error(`Error: ${res.status}`)
  }
}

export const updateUserProfile = async (name, email) => {
  if (!name || !email) return;

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({name, email}),
    })

    return await checkResponse(response)
  } catch (error) {
    console.error('Update User Error', error)
    throw error
  }
}

export const getSavedMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })

    return await checkResponse(response)
  } catch (err) {
    console.error(err)
  }
}

export const addMoviesToList = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data)
    })

    return await checkResponse(response)
  } catch (err) {
    console.error(err)
  }
}

export const deleteMoviesFromList = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })

    return await checkResponse(response)
  } catch (err) {
    console.error(err)
  }
}
