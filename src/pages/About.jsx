import React from 'react'

function About() {
  return (
    <div>
      
            <header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3"> Nuestra Mision </h1>
                                <p className="lead fw-normal text-muted mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis quis, perspiciatis nobis magnam similique aut velit minima sed earum in adipisci culpa, dolorem ea obcaecati, placeat consectetur tenetur tempora!</p>
                                <a className="btn btn-primary btn-lg" href="#scroll-target"> Nuestra historia </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder"> Nuestra Garantia </h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Titulo &amp; Ejemplo</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder"> Nuestro Equipo </h2>
                        <p className="lead fw-normal text-muted mb-5">Dedicado a la calidad y a tu éxito</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Nombre 1</h5>
                                <div className="fst-italic text-muted"> Trabajo </div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Nombre 2</h5>
                                <div className="fst-italic text-muted"> Trabajo </div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Nombre 3</h5>
                                <div className="fst-italic text-muted"> Trabajo </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Nombre 4</h5>
                                <div className="fst-italic text-muted"> Trabajo </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default About
