/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Footer from '../utils/footer'

export default function Home() {
  const router = useRouter()
  return <>
    <div className="home-container d-flex flex-column align-center text-white pb-3">
      <div className="d-flex flex-column align-items-center">
        <img src="/hackinghealth.png" width={150} />
        <h1 className="text-center">Défi 17 : EvalSecours</h1>
      </div>

      <div className="my-5 d-flex justify-content-center">
        <Button size="large" variant="contained" onClick={() => router.push('/form')}>Commencer le formulaire</Button>
      </div>

      <div className="mt-4 d-flex justify-content-center">
        <img src="/photo.jpg" style={{ width: '80%', maxWidth: '500px' }} />
      </div>

      <Footer />
    </div>
  </>
}