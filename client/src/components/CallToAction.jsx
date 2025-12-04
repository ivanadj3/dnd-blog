import { Button } from "flowbite-react";

export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Wanto to learn more about Dungeons and Dragons? 
                </h2>
                <p className='text-gray-500 my-2'>
                    Checkout these resources!
                </p>
                <Button gradientDuoTone='tealToLime'className='rounded-tl-xl rounded-bl-none'><a href="https://dnd5e.wikidot.com" target='_blank' rel='noopener noreferrer'>Learn more</a> 
                    
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://miro.medium.com/0*JIv090kOKmxjjabU.jpg"/>
            </div>
        </div>
    )
}