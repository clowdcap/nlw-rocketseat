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
    <div className='max-w-[1124px] h-screen mx-auto flex items-center'>
      <main>
        <Image src={logoImg} alt="Logo Preview"/>
        
        <h1 className='mt-16 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExempleImg} alt="User Preview" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual nome do seu bolão?' name="" id="" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas</p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="Icon Preview" />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="Icon Preview" />
            <div>
              <span>+2.034</span>
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