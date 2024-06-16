import Phone from "../assets/phone.png"
import Mail from "../assets/chat.png"
import Home from "../assets/home.png"


function Contact() {
  return (
    <div className='text-white flex flex-col gap-y-10 h-5/6'>
        <div className="text-center font-bold text-2xl">Get In Touch</div>
        <div className="flex flex-col gap-y-2">
            <p className="text-xl font-bold text-center">Here you can let me know If you have any criticism, suggestion or problem</p>
            <p className="text-xl font-bold text-center">I am waiting to hear your voice and see your message.</p>
        </div>
        <div className="flex gap-x-10 p-10 h-4/6">
            <div className="w-3/5 border rounded-xl flex flex-col gap-y-10 justify-center p-5">
                <p className="text-2xl font-bold">What's up ?</p>


                <div className="flex justify-between">

                    <div>
                        <div className="flex flex-col gap-y-2">
                            <p>Name:</p>
                            <input type="text" className="h-10 w-full border bg-black rounded-xl"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p>E mail:</p>
                            <input type="text" className="h-10 w-full border bg-black rounded-xl"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p>Subject:</p>
                            <input type="text" className="h-20 w-full border bg-black rounded-xl"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <p>Content:</p>
                        <input type="text" className="h-56 w-full border bg-black rounded-xl"/>
                    </div>

                </div>
                <div className="border h-14 rounded-2xl  flex text-xl font-bold  justify-center items-center">Contact Me</div>
            </div>


            <div className=" w-2/5 border flex flex-col gap-y-16 p-5 rounded-xl">
                <div className="text-2xl font-bold">
                    <p>What is your plan?</p>
                    <p>Call me:</p>
                </div>
                <div className="text-xl">You can get my contact information here and if you like, you can see the urls of my pages on social networks from the top of the page and find me there.</div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-10">
                        <img src={Home} alt="" className="h-7 w-7"/>
                        <p>Tirupur ,Tamil Nadu</p>
                    </div>
                    <div className="flex gap-x-10">
                        <img src={Mail} alt="" className="h-7 w-7"/>
                        <p>guruvedhanths@gmail.com</p>
                    </div>
                    <div className="flex gap-x-10">
                        <img src={Phone} alt="" className="h-7 w-7"/>
                        <p>+91  9751749161</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-white text-center font-thin'>Build & Design by Guruvedhanth S</p>

    </div>
  )
}

export default Contact