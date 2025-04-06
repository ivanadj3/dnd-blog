import React from 'react'
import { Link } from 'react-router-dom';
import { Label, TextInput, Button} from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row
      md:items-center gap-20'>
      {/* left side  OVDE JE LOGO*/}
      <div className='flex-1'>
      <Link 
            to="/" 
            className=' font-bold dark:text-white text-4xl'>
            <span className = 'px-2 py-1 bg-gradient-to-r from-teal-300 via-lime-300 to-gray-500 rounded-lg text-black'>D&D</span>
            Forge
        </Link>
        <p className='text-sm mt-5'>
        🕯️ Hail, Traveler!
        Thou hast stumbled upon a mystical realm — a mere echo of the legendary D&D Beyond. This domain is but a demo, conjured for learning and lore. To join our ranks, inscribe thy credentials in the scrolls below — an email and a sacred password, or call upon the ancient powers of Google.
        </p>
      </div>
      {/* right side */}

      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label value = 'Your Adventurer Name:' />
            <TextInput
              type='text'
              placeholder='Username'
              id='username'/>
          </div>
          <div>
            <Label value = 'Your Magic Scroll:' />
            <TextInput
              type='text'
              placeholder='E-mail'
              id='email'/>
          </div>
          <div>
            <Label value = 'Your Secret Sigil:' />
            <TextInput
              type='text'
              placeholder='Password'
              id='password'/>
          </div>
          <Button gradientDuoTone='tealToLime' type='submit'>
            Sign Up
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Already a member?</span>
          <Link to='/sign-in' className='text-green-900'> Sign In </Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  </div>
  )
}
