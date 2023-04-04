import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";
import axios from "axios";

export const StoreInvoice = () => {
  const [einvoice, setEinvoice] = useState("");
  const [invoicee, setInvoicee] = useState("");

  const url =
    "https://app.swaggerhub.com/apis-docs/418_Movement/SENG2021_H10A_Brownie_Invoice_Storage/1.1.0#/Invoice/post_invoice_upload";

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
      <h2>Store E-Invoice</h2>
      <form className="single-form" onSubmit={handleSubmit}>
        {/* xml_data */}
        <label htmlFor="einvoice">XML Data</label>
        <input
          value={einvoice}
          onChange={(e) => setEinvoice(e.target.value)}
          type="text"
          placeholder="<b Invoice xml.....ns=\>"
          id="einvoice"
          name="einvoice"
        ></input>

        {/* invoicee email */}
        <label htmlFor="file">Invoicee Email</label>
        <input
          value={invoicee}
          onChange={(e) => setInvoicee(e.target.value)}
          type="email"
          placeholder="abc123@gmail.com"
          id="invoicee"
          name="invoicee"
        ></input>

        {/* Submit */}
        <button type="submit">Store E-Invoice</button>
      </form>
    </div>
  );
};
