// <link rel="icon" href="/favicon.ico" />

// Next - utiliza o conceito de SSR - Server Side Rendering

// interface HomeProps {
//   count: number
// }

import Image from 'next/image'

// Images Import
import appPreviewImg from './../assets/app-nlw-copa-preview.png'
import logoImg from './../assets/logo.svg'
import iconCheckImg from './../assets/icon-check.svg'
import usersAvatarExempleImg from './../assets/users-avatar-example.png'

export default function Home() {
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
      <main>
        <Image src={logoImg} alt="Logo Preview"/>
        
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div className='mt-10 flex items-center gap-2 '>
          <Image src={usersAvatarExempleImg} alt="User Preview" />
          <strong className='text-gray-100 text-xl font-light'>
            <span className='text-ignite-500' >+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className='mt-10 flex gap-2'>
          <input type="text" 
            required 
            placeholder='Qual nome do seu bolão?'
            className='flex-1 px-6 py-4 rounded text-sm bg-gray-800 border border-gray-600'
          />
          <button 
            type="submit"
            className='bg-yellow-500 uppercase px-6 py-4 rounded font-bold text-gray-900 text-sm hover:bg-yellow-700'
          >Criar meu bolão</button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas</p>

        <div className='mt-10 text-gray-100 pt-10 border-t border-gray-600 flex justify-between items-center'>

          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="Icon Preview" />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"></div>

          <div className='flex items-center gap-6'>
            <Image src={iconCheckImg} alt="Icon Preview" />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="Image Preview" />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:5000/pools/count')
//   const data = await response.json()

//   console.log(data)

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }