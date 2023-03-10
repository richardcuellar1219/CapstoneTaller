import emailjs from "emailjs-com";

import { useRef } from "react";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //   emailjs
    //     .sendForm(
    //       "service_j0yjz8h",
    //       "template_q2r1yki",
    //       form.current,
    //       "r0QE6bKrgAz6sG4nc"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };

    emailjs
      .sendForm(
        "service_j0yjz8h",
        "template_q2r1yki",
        form.current,
        "r0QE6bKrgAz6sG4nc"
      )
      .then(
        function (response) {
          console.log(
            "Correo electrónico enviado",
            response.status,
            response.text
          );
          alert("Mensaje enviado correctamente");
        },
        function (error) {
          console.log("Error al enviar el correo electrónico", error);
        }
      );
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Email</h1>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Dirección email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Asunto</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Mensaje</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>
            <div></div>
            <button type="submit" class="btn btn-primary m-2">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
