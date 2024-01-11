'use client'
import Image from 'next/image'
import {Hero} from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { fetchCars } from '@/utils'
import { error } from 'console'
import Carcard from '@/components/Carcard'
import { fuels, yearsOfProduction } from '@/constant'
import ShowMore from '@/components/ShowMore'
import { useEffect, useState } from 'react'

// export default async function Home({searchParams}) {
//   const allCars = await fetchCars({
//     manufacturer: searchParams.manufacturer || '',
//     year:searchParams.year || 2022,
//     fuel:searchParams.fuel || '',
//     limit:searchParams.limit || 10,
//     model:searchParams.model
//   })
export default function Home (){
  const [allCars, setAllCars] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // search state
  const [model, setModel] = useState('')
  const [manufacturer, setManufacturer ] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  //pagination state
  const [limit, setLimit] = useState(10)


async function getCars() {
  setIsLoading(true)
  try {
    const result = await fetchCars({
          manufacturer: manufacturer || '',
          year:year || 2022,
          fuel:fuel || '',
          limit:limit || 10,
          model:model}
    )
    setAllCars(result)
  } catch (error) {
    console.log(error)
  }finally{
    setIsLoading(false)
  }
}

useEffect(() => {
  getCars()

}, [fuel,year,limit,manufacturer,model])


  // console.log(allCars)
  // const isEmptyCar = !Array.isArray(allCars) 
  // || allCars.length<1  || !allCars

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x
       padding-y max-width'id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer}
           setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {
          allCars?.length>0 ?(<section>
            <div className='home__cars-wrapper'>
              {allCars?.map((cars)=> (
              <Carcard car={cars}/>))}
            </div>
            {
              isLoading && <div className='mt-16 w-full flex-center'>
                <Image 
                src='/loader.svg'
                width={50}
                height={50}
                alt='loader'
                className='object-contain'/>
              </div>
            }
            <ShowMore
            pageNumber={limit/10}
            isNext={limit>allCars.length}
            setLimit={setLimit}
            />
          </section>) :(<div className='home__error-container'><h2> opps no cars </h2>
          <p>{allCars.message}</p></div>
    )    }
      </div>
    </main>
  )
}
