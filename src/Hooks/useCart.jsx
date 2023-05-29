import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvide"
import { useQuery } from "@tanstack/react-query"

const useCart = () => {
  const { user } = useContext(AuthContext)
//=================================================TAN STACK QUERY===========================================
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      )

      return res.json()
    },
  })

  return [refetch, cart]
}
export default useCart
