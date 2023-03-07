import React from 'react'

function Inicio2() {
  return (
    <div>
      <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2"> Lassa </h1>
                            <p className="lead text-white-50 mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur, ratione enim necessitatibus molestiae unde consequatur, eum sunt quidem recusandae nostrum laborum odit, ipsum eaque dolorem nesciunt sequi itaque quod.</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features"> Contactanos </a>
                                <a className="btn btn-outline-light btn-lg px-4" href="#!"> Saber mas </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <h2 className="h4 fw-bolder">title </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi nemo totam, iste molestias autem alias delectus laborum. Quod necessitatibus molestias sequi, repellendus reiciendis fugiat beatae pariatur tempora veritatis eum?</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                        <h2 className="h4 fw-bolder">title </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi nemo totam, iste molestias autem alias delectus laborum. Quod necessitatibus molestias sequi, repellendus reiciendis fugiat beatae pariatur tempora veritatis eum?</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                        <h2 className="h4 fw-bolder">title </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi nemo totam, iste molestias autem alias delectus laborum. Quod necessitatibus molestias sequi, repellendus reiciendis fugiat beatae pariatur tempora veritatis eum?</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        
    </div>
  )
}

export default Inicio2
