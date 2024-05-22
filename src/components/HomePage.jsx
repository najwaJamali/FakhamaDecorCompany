import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="HeaderPicHomePage">
            </div>
            <section className='AboutComponent py-3 py-md-5'>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img className="img-fluid rounded" loading="lazy" src="/img/line-green-thread-reels.jpg" alt="About 1" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11">
                                    <h2 className="mb-3">À propos de FAKHAMA DECOR</h2>
                                    <p className="lead fs-5  mb-3 pb-5">
                                        Fondée en 2020, FAKHAMA DECOR est une entreprise marocaine spécialisée dans la vente de tissus de haute qualité. Basée à Casablanca, FAKHAMA DECOR compte plus de trois magasins stratégiquement situés à Derb Oumar, offrant ainsi un accès facile à nos produits pour une clientèle variée et exigeante.
                                        Chez FAKHAMA DECOR, nous nous engageons à offrir un large choix de tissus qui allient élégance, durabilité et raffinement. Nous sélectionnons minutieusement nos collections pour répondre aux besoins spécifiques de chaque client, qu'il s'agisse de particuliers ou de professionnels du secteur de la décoration intérieure.
                                        Notre équipe dédiée est passionnée par les textiles et s'efforce de fournir un service client exceptionnel. Nous croyons fermement que la satisfaction de nos clients est la clé de notre succès. Ainsi, nous offrons des conseils personnalisés et un accompagnement tout au long du processus d'achat pour garantir que chaque client trouve le tissu parfait pour son projet.
                                        FAKHAMA DECOR, c'est plus qu'une simple boutique de tissus. C'est un lieu où la qualité rencontre le choix, et où chaque visite est une expérience unique et inspirante. Venez découvrir notre gamme exclusive et laissez-vous séduire par l'élégance et la qualité de nos tissus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-5" id="questions">
                <div class="container ">
                    <h2 class=" text-centre mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div class="accordion accordion-flush" id="questions">
                        <div class="accordion-item">
                            <h2 class="accordion-header" >
                                <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-one" >
                                    Where exactly are you located
                                </button>
                            </h2>
                            <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#questions">
                                <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt ipsam repudiandae ipsa, ullam obcaecati suscipit sint aliquid aliquam minus nobis sequi soluta architecto voluptatem veritatis incidunt temporibus sapiente ea?</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" >
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-two" >
                                    How much does it cost to attend ?
                                </button>
                            </h2>
                            <div id="question-two"
                                class="accordion-collapse collapse"
                                data-bs-parent="#questions">
                                <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt ipsam repudiandae ipsa, ullam obcaecati suscipit sint aliquid aliquam minus nobis sequi soluta architecto voluptatem veritatis incidunt temporibus sapiente ea?</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" >
                                <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-three" >
                                    what do I need to know?
                                </button>
                            </h2>
                            <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#questions">
                                <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt ipsam repudiandae ipsa, ullam obcaecati suscipit sint aliquid aliquam minus nobis sequi soluta architecto voluptatem veritatis incidunt temporibus sapiente ea?</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" >
                                <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-four" >
                                    will you help me find a job?
                                </button>
                            </h2>
                            <div id="question-four" class="accordion-collapse collapse" data-bs-parent="#questions">
                                <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt ipsam repudiandae ipsa, ullam obcaecati suscipit sint aliquid aliquam minus nobis sequi soluta architecto voluptatem veritatis incidunt temporibus sapiente ea?</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" >
                                <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#question-five" >
                                    How do I sign up ?
                                </button>
                            </h2>
                            <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#questions">
                                <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt ipsam repudiandae ipsa, ullam obcaecati suscipit sint aliquid aliquam minus nobis sequi soluta architecto voluptatem veritatis incidunt temporibus sapiente ea?</div>
                            </div>
                        </div>
                    </div>

                </div>


</section >
            <div className='OurProducts pb-3'>
                <h2 className="TitleOurProductSection">Our Products</h2>
                <div className=" OurProductsItems pb-3 row">
                    <div className="col-sm-3 pb-3">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" src="/img/SilkPic.jpeg" alt="SilkPic" />
                                <h5 className="card-title"><strong>Silk Fabric</strong></h5>
                                <p className="card-text">
                                    A luxurious, natural fiber with a smooth texture and high sheen.<br />
                                </p>
                                <a href="#" className="btn btn-primary">More Pic</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 pb-3">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" src="/img/NylonPic.jpeg" alt="NylonPic" />
                                <h5 className="card-title"><strong>Nylon Fabric</strong></h5>
                                <p className="card-text">
                                    A strong, synthetic fiber known for its resilience and resistance to abrasion.<br />
                                </p>
                                <a href="#" className="btn btn-primary">More Pic</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 pb-3">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" src="/img/CottonPic.jpeg" alt="CottonPic" />
                                <h5 className="card-title"><strong>Cotton Fabric</strong></h5>
                                <p className="card-text">
                                    A natural fiber that is soft, durable, and breathable.<br />
                                </p>
                                <a href="#" className="btn btn-primary">More Pic</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 pb-3">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" src="/img/ChenillePic.jpeg" alt="ChenillePic" />
                                <h5 className="card-title"><strong>Chenille Fabric</strong></h5>
                                <p className="card-text">
                                    A soft, fuzzy fabric with a texture similar to a caterpillar.<br />
                                </p>
                                <a href="#" className="btn btn-primary">More Pic</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
             </div >
    );
}

export default HomePage;
