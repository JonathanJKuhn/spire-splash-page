'use client'
import axios from "axios"
import { useEffect, useState } from "react"


const premium = () => {
    const [prices, setPrices] = useState([])

    // useEffect(() => {
    //     fetchPrices()
    // }, [])

    // const fetchPrices = async () => {
    //     const { data } = await axios.get('/api/getproducts')
    //     setPrices(data)
    //     console.log(data)
    // }

    return (
      <section className="w-full">
        <div className="grid place-content-center mt-24">
            <div className="flex flex-col bg-gray/80">
                <div className="flex justify-between">
                    <img src="/images/SPIRE-logo-square.svg" className="flex-0" alt="Spire Logo" />
                    <div className="flex-2 p-4 mt-10 mx-auto">
                        <h1 className="text-3xl font-bold text-center">Welcome to Spire</h1>
                        <h2 className="text-xl font-bold text-center mt-7 mx-auto w-40">Premium Guest Wi-Fi Service</h2>
                    </div>
                </div>
                <div className="mx-auto mt-5 w-5/6">
                    <p className="font-medium text-center break-normal">To connect to our premium Wi-Fi, please fill out the information below</p>
                    <form action="#">
                        <div className="grid grid-cols-1 gap-6">
                            
                        </div>
                    </form>
                </div>
            </div>

        </div>
      </section>
  )
}

export default premium