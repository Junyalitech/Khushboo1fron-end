import axios from "axios";
import { useState } from "react";

export const AdminLogo = () => {
  const [image, setImage] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState('');

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  async function handleApi() {
    console.warn(image);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const result = await axios.post('http://localhost:4000/api/logo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      console.warn(result.data);
    } catch (error) {
      console.error("Error updating logo:", error);
    }
  }

  const collectTextAndImage = async () => {
    console.warn(text, photo);

    try {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("text", text);

      const result = await axios.post('http://localhost:4000/textimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      console.warn(result.data);
    } catch (error) {
      console.error("Error updating photo and text:", error);
    }
  }

  return (
    <>
      <section className="Logo">
        <div>
          <input type="file" onChange={handleImage} />
          <button type="submit" className="logo-updatebutton" onClick={handleApi}>
            update logo
          </button>
        </div>
        <div>
          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} />
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />

          <button type="submit" className="logo-updatebutton" onClick={collectTextAndImage}>
            update photo and text
          </button>
        </div>
      </section>
    </>
  );
};

export default AdminLogo;
