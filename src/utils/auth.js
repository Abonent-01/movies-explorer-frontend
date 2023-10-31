import {BASE_URL} from "./constants";

const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json()
  } else {
    throw new Error(`Error: ${res.status}`)
  }
}

export const register = async (name, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({name, email, password})
    })

    return await checkResponse(response)
  } catch (error) {
    console.error('Registration Error', error)
    throw error
  }
}

export const authorize = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({email, password}),
    })

    return await checkResponse(response)
  } catch (error) {
    console.error('Loggin Error.', error)
    throw error
  }
}

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    return await checkResponse(response)

  } catch (error) {
    console.error('Logout Error', error)
    throw error
  }
}

export const getContent = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    return await checkResponse(response)

  } catch (error) {
    console.error('Get current user', error)
    throw error
  }
}
