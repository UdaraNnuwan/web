import axios from '../../api/axios'
import useAuth from '../useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get('refresh-token', {
      withCredentials: true,
    })
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.atkn }
    })
    console.log(response.data.accessToken)
    return response.data.accessToken
  }
  return refresh
}

export default useRefreshToken
