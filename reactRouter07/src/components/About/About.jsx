import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Thank you very much. All the pleasures of those who accuse him, 
                        no one is chosen to see, and yet! Happiness is held by the bliss from which I will open, 
                        repels convenient results! This results in services and pain!
                        </p>
                        <p className="mt-4 text-gray-600">
                        For those of us who have less pleasures, should he seek the most worthy of freedom? 
                        None of us can be harsher than those who do not know that forgiveness is harsher than flexibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}