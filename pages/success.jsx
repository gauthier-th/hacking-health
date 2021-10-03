import Footer from '../utils/footer'

export default function Success() {
  return <div className="container">
    <div className="container-80 d-flex flex-column align-center">
      <h1 className="mt-4 text-center">EvalSecours</h1>
      <p className="mt-3 mb-4 text-center">
        Ce formulaire est totalement anonyme.<br />
        Nous ne collectons aucune donnée personnelle.
      </p>
      <h2 className="mt-5 mb-4 text-center text-success">
        Votre réponse a bien été reçue !
      </h2>
    </div>

    <Footer />
  </div>
}