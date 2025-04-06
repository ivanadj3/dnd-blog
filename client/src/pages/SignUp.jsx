import { useState, React } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput, Button, Alert, Spinner} from 'flowbite-react';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id] : e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all fields.');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch ('/api/auth/signup', {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
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
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value = 'Your Adventurer Name:' />
            <TextInput
              type='text'
              placeholder='Username'
              id='username' onChange={handleChange}/>
          </div>
          <div>
            <Label value = 'Your Magic Scroll:' />
            <TextInput
              type='email'
              placeholder='E-mail'
              id='email' onChange={handleChange}/>
          </div>
          <div>
            <Label value = 'Your Secret Sigil:' />
            <TextInput
              type='password'
              placeholder='Password'
              id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='tealToLime' type='submit' disabled={loading}>
            {
              loading ? (
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Summoning...</span>
                </>
              ) : 'Sign Up'
            }
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Already a member?</span>
          <Link to='/sign-in' className='text-green-900'> Sign In </Link>
        </div>
        {
          errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
      </div>
      <div/>
    </div>
  </div>
  )
}
