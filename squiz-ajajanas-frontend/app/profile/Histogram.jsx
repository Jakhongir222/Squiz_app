import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

function Histogram() {
  const { data: session } = useSession(); 
  const baseURL = 'https://finalprojectbackendapp.azurewebsites.net/category';
  const [scores, setScores] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/user/${session.user.email}/score`)
      .then(data => data.json())
      .then(setScores(data))
  }, [session])

  return (
    <div>Histogram</div>
  )
}

export default Histogram