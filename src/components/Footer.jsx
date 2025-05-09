import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="flex justify-center items-center flex-col py-10">
      
        <div className="w-full grid gap-10 text-zinc-300 lg:gap-15 px-6 lg:px-20">
            <div className="">
                <h1 className="text-xl font-bold italic mb-5">We Poomala</h1>

                <p className="text-sm italic font-semibold">
                    parambai, Poomala <br />
                    Thrissur, Kerala 680 581 <br />
                    phone: +91 9207287491 <br />
                    email: printoysibi0@gmail.com
                </p>
            </div>

            <div className="grid gap-2">
                <div className="smedia flex gap-10">
                    <img src="/" alt="insta" />
                    <img src="/" alt="facebook" />
                </div>
                <p className="text-sm italic font-semibold">
                © {new Date().getFullYear()} We Poomala. All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
