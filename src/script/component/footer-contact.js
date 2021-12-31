class FooterContact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
      `<footer class="text-center text-lg-start bg-dark text-white" id="contact">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with me on social media:</span>
        </div>
        <div>
          <a href="" class="me-4 text-white sosmed-link">
          <i class="fab fa-whatsapp"></i>
          </a>
          <a href="" class="me-4 text-white sosmed-link">
          <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-white sosmed-link">
          <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-white sosmed-link">
          <i class="fab fa-github"></i>
          </a>
        </div>
        </section>
        <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-star me-3 logo-red"></i>Minh Hieu is me 
            </h6>
            <p>
            Hi,Minh Hieu is me. I'm an intern at NWS 
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
            Contact
            </h6>
            <p><i class="fas fa-home me-3 logo-red"></i> Ha Noi, Viet Nam</p>
            <p>
            <i class="fas fa-envelope me-3 logo-red"></i>
            hi.minhhieuisme@gmail.com
            </p>
            <p><i class="fas fa-phone me-3 logo-red"></i> +84 85 8316 935</p>
          </div>
          </div>
        </div>
        </section>
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        <p><a href="#" class="text-white">Back to top</a></p>
        </div>
      </footer>`
        ;
  }
}

customElements.define('footer-contact', FooterContact);
