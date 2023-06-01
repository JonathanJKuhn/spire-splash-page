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
                        <div className="grid grid-cols-1 gap-6 my-5 mx-5">
                            <label className="block">
                                <span className="text-gray-700">First Name</span>
                                <input type="text" className="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:border-black focus:ring-0
                                " placeholder />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Last Name</span>
                                <input type="text" className="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:border-black focus:ring-0
                                " placeholder />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Email Address</span>
                                <input type="email" className="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:border-black focus:ring-0
                                " placeholder="joe@example.com" />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Please select a Wifi-Pass from the list below</span>
                                <select class="
                                    block
                                    w-full
                                    mt-0
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:ring-0 focus:border-black
                                ">
                                    <option>1 Day Pass - $15</option>
                                    <option>2 Day Pass - $15</option>
                                    <option>5 Day Pass - $15</option>
                                    <option>7 Day Pass - $15</option>
                                </select>
                            </label>
                            <button className="
                                bg-primary
                                hover:bg-primary/80
                                text-white
                                w-2/3
                                py-2
                                px-4
                                mx-auto
                            ">
                                Continue to Stripe for Payment
                            </button>
                            <a href="#" className="
                                text-center
                                text-primary
                                hover:text-primary/80
                            ">
                                If you already have an existing pass, click here
                            </a>
                        </div>
                    </form>
                </div>
                <div className="
                    flex
                    justify-between
                    mt-5
                    h-10
                    text-sm
                ">
                    <a href="#" className="
                        bg-primary
                        text-white
                        text-center
                        py-2
                        px-4
                        w-1/3
                        hover:bg-primary/80
                    ">
                        Your Info
                    </a>
                    <a href="#" className="
                        bg-primary
                        text-white
                        text-center
                        py-2
                        px-4
                        w-1/3
                        hover:bg-primary/80
                    ">
                        Terms & Conditions
                    </a>
                    <a href="#" className="
                        bg-primary
                        text-white
                        text-center
                        py-2
                        px-4
                        w-1/3
                        hover:bg-primary/80
                    ">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
      </section>
  )
}

export default premium