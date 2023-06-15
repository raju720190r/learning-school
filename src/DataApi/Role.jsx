export const getRole = async email => {
    const response =await fetch(`${import.meta.env.VITE_server_url}/users/${email}`)
    const user = await response.json();
    return user?.role
  }