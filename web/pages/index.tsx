// <link rel="icon" href="/favicon.ico" />

// Next - utiliza o conceito de SSR - Server Side Rendering

interface HomeProps {
  count: number
}

export default function Home(props) {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Contagem: {props.count}</h2>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:5000/pools/count')
  const data = await response.json()

  console.log(data)

  return {
    props: {
      count: data.count
    }
  }
}