import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";

export const RenderInvoice = () => {
  const [inputFile, setinputFile] = useState("");
  const [lang, setLang] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */

    try {
      const formData = new FormData();
      formData.append("inputFile", inputFile);
      formData.append("lang", "English");
      formData.append("option", "Simple");

      const options = {
        headers: {
          Authorization:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg3YzFlN2Y4MDAzNGJiYzgxYjhmMmRiODM3OTIxZjRiZDI4N2YxZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWludm9pY2UtcmVuZGVyaW5nLWFwaSIsImF1ZCI6ImVpbnZvaWNlLXJlbmRlcmluZy1hcGkiLCJhdXRoX3RpbWUiOjE2ODA2OTE0NDksInVzZXJfaWQiOiJ0WEJWdW1jYkhjVFpsMmppamJjYXAyd2lMeFoyIiwic3ViIjoidFhCVnVtY2JIY1RabDJqaWpiY2FwMndpTHhaMiIsImlhdCI6MTY4MDY5MTQ0OSwiZXhwIjoxNjgwNjk1MDQ5LCJlbWFpbCI6InNpeHJpcDdlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2l4cmlwN2VyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SHgJpe1iVsFnyf-O9Ty5VC6HXN1Jau2XLfWnFEHssJcaCX6AEUZ2dAR8uBhJRS_q-UWUm4ul9C2Tyg1EkvpHDDgDGk7Xt0It76S-EpSWlc7zcsyYWQyxvVTbDU3-tOZg712lXDXmw8H8LtPblft14_owoVP9s1JDrdiEhChyjO0MDCkA9WTzyekN8bn1TKUp65IxMjr_52Mx4ZHc094w42SYyfFc6rd8Z3t6ZS-SiUu_YnaY1FImDNePmMuRTn8JLhwGCqpkjyn884ntj9FNBQMpkawawHQfMK2b29RBjyXnqqCLrm2XIUTxrxUl7cfySUIcHcdO4ZWPhf0SSdJGGg",
        },
      };

      const response = await Axios.post(
        "https://einvoice-rendering-api.web.app/render/pdf/v2/",
        formData,
        options
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          id="lang"
          name="lang"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>

        {/* Option */}
        <label htmlFor="option">Option</label>
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          id="option"
          name="option"
        >
          <option value="Simple">Simple</option>
          <option value="Modern">Modern</option>
        </select>

        {/* Submit */}
        <button type="submit">Render E-Invoice</button>
      </form>
    </div>
  );
};
