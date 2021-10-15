import React, { useState, useEffect } from 'react'
// import { Slide } from 'react-awesome-reveal'
import { matchesCollection } from '../../../firebase'

const Blocks = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    if (!matches.length > 0) {
      matchesCollection
        .get()
        .then((snapshot) => {
          const matches = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          console.info('matches', matches)
        })
        .catch((error) => {
          console.info('error', error)
        })
    }
  }, [matches])

  return <div>Block</div>
}

export default Blocks
