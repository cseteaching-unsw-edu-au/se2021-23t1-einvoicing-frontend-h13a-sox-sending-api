import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";

export const RenderInvoice = () => {
  const url =
    "https://einvoice-rendering-api.web.app/api-docs/#/API%20Routes/post_render_pdf_v2_";
  const [inputFile, setinputFile] = useState("");
  const [lang, setLang] = useState("");
  const [option, setOption] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */

    const formData = new FormData();
    formData.append("email", "sixrip7er@gmail.com");
    formData.append("password", "1234567");
    console.log(formData);

    // Get Token
    try {
      // Post Request

      const response = await Axios.post(
        "https://einvoice-rendering-api.web.app/render/pdf/v2/",
        "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWludm9pY2UtcmVuZGVyaW5nLWFwaSIsImF1ZCI6ImVpbnZvaWNlLXJlbmRlcmluZy1hcGkiLCJhdXRoX3RpbWUiOjE2ODAzNjY5NTUsInVzZXJfaWQiOiJ0WEJWdW1jYkhjVFpsMmppamJjYXAyd2lMeFoyIiwic3ViIjoidFhCVnVtY2JIY1RabDJqaWpiY2FwMndpTHhaMiIsImlhdCI6MTY4MDM2Njk1NSwiZXhwIjoxNjgwMzcwNTU1LCJlbWFpbCI6InNpeHJpcDdlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2l4cmlwN2VyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OBXMb-q5bEatmlgqfGxeVplqDq2at__qlhpvLgwYf-9gUv7oJBSpPRwGKzprJap00p0vsaSVA5jHVmw4QlQdWY5iaLK-hAKBrw5smYnMv1Bn8Be0wVP5C27K716CWIoBVNCISTZPCBKpfJKjFfA31j85beLKnptZPwYpkzToe0zw1KtQQBtktmg6YOEwdp7rtVEFga4wpICi9fIGRqmJRhoBrMQFKZGBLsmATP7RS7SfuOBfzRECUE-87lAxOapZXgNcZBB3SojrBbz2UvvRN0-zosg4l81TakdyN3fxiZqDUQvETCqkmcQ3DwWwnlkP6n0ren9rUr-RXD8ucmSz3Q",
        new URLSearchParams({
          inputFile: inputFile,
          lang: lang,
          option: option,
        })
      );
      // Handle response {200}
      setToken(response.data.token);
      console.log(token);
    } catch (err) {
      // Handle error
      console.log(err);
    }
  };

  return (
    <div className="single-page">
      <h2>Render E-Invoice</h2>
      <form className="single-form" onSubmit={handleSubmit}>
        {/* inputFile */}
        <label htmlFor="inputFile">XML Data</label>
        <input
          value={inputFile}
          onChange={(e) => setinputFile(e.target.value)}
          type="text"
          placeholder="<?xml version= .... </Invoice>"
          id="inputFile"
          name="inputFile"
        ></input>

        {/* Lang */}
        <label htmlFor="lang">Language</label>
        <input
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          type="text"
          placeholder="English"
          id="lang"
          name="lang"
        ></input>

        {/* Option */}
        <label htmlFor="option">Option</label>
        <input
          value={option}
          onChange={(e) => setOption(e.target.value)}
          type="text"
          placeholder="Simple or Modern"
          id="option"
          name="option"
        ></input>

        {/* Submit */}
        <button type="submit">Render E-Invoice</button>
      </form>
    </div>
  );
};
