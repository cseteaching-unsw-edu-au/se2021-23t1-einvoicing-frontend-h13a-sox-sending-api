import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";
import axios from "axios";

export const CreateInvoice = () => {
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);

  const url =
    "http://seng2021-f12a-api-env.eba-pymctycp.ap-southeast-2.elasticbeanstalk.com";

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */

    // const formData = new FormData();
    // formData.append("email", "sixrip7er@gmail.com");
    // formData.append("password", "1234567");
    // console.log(formData);

    //     // Get Token
    //     try {
    //       // Post Request

    //       const response = await Axios.post(
    //         "https://einvoice-rendering-api.web.app/render/pdf/v2/",
    //         "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWludm9pY2UtcmVuZGVyaW5nLWFwaSIsImF1ZCI6ImVpbnZvaWNlLXJlbmRlcmluZy1hcGkiLCJhdXRoX3RpbWUiOjE2ODAzNjY5NTUsInVzZXJfaWQiOiJ0WEJWdW1jYkhjVFpsMmppamJjYXAyd2lMeFoyIiwic3ViIjoidFhCVnVtY2JIY1RabDJqaWpiY2FwMndpTHhaMiIsImlhdCI6MTY4MDM2Njk1NSwiZXhwIjoxNjgwMzcwNTU1LCJlbWFpbCI6InNpeHJpcDdlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2l4cmlwN2VyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OBXMb-q5bEatmlgqfGxeVplqDq2at__qlhpvLgwYf-9gUv7oJBSpPRwGKzprJap00p0vsaSVA5jHVmw4QlQdWY5iaLK-hAKBrw5smYnMv1Bn8Be0wVP5C27K716CWIoBVNCISTZPCBKpfJKjFfA31j85beLKnptZPwYpkzToe0zw1KtQQBtktmg6YOEwdp7rtVEFga4wpICi9fIGRqmJRhoBrMQFKZGBLsmATP7RS7SfuOBfzRECUE-87lAxOapZXgNcZBB3SojrBbz2UvvRN0-zosg4l81TakdyN3fxiZqDUQvETCqkmcQ3DwWwnlkP6n0ren9rUr-RXD8ucmSz3Q",
    //         new URLSearchParams({
    //           inputFile: inputFile,
    //           lang: lang,
    //           option: option,
    //         })
    //       );
    //       // Handle response {200}
    //       setToken(response.data.token);
    //       console.log(token);
    //     } catch (err) {
    //       // Handle error
    //       console.log(err);
    //     }
  };

  return (
    <div className="single-page">
      <h2>Create E-Invoice</h2>
      <form className="single-form" onSubmit={handleSubmit}>
        {/* type of input */}
        <label htmlFor="type">Type of Input</label>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          type="text"
          placeholder="json or xml or yaml"
          id="type"
          name="type"
        ></input>

        {/* file */}
        <label htmlFor="file">File Upload</label>
        <input
          value={file}
          onChange={(e) => setFile(e.target.value)}
          type="file"
          id="file"
          name="file"
        ></input>

        {/* Submit */}
        <button type="submit">Create E-Invoice</button>
      </form>
    </div>
  );
};
