import { Preview } from './components/preview'
import { useEffect, useState } from 'react'
import loadingGif from './static/loading.gif'

function App(){
  const [ loading, setLoading ] = useState(true)
  const [ offers, setOffers ] = useState([])

  useEffect(()=>{
    fetch('https://www.kattabozor.uz/hh/test/api/v1/offers')
      .then(a=>a.json())
      .then(a=>{
        setOffers(a.offers)
        setLoading(false)
      })
  }, [])

  if(loading){
    return (
      <div className='row justify-content-center mt-5'>
        <img src={loadingGif} className='col-xl-1 col-md-2 col-3' />
      </div>
    )
  }
  return (
    <div className='py-4 d-flex flex-column align-items-center px-2'>
      {offers.map(i=> <Preview key={i.id} offer={i} />)}
    </div>
  )
}

export default App