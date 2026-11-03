import { useNavigate } from 'react-router-dom';
import '../styles/form.css';
import axios from "axios";


const CreatePost = () => {

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await axios.post("http://localhost:3000/create-post", formData)
      .then(response => console.log(response));

    navigate("/feed")
  }

  return (
    <section className='form-container'>
      <h2>Create Post</h2>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor='image'>Upload Image</label>
          <input
            name="image"
            type="file"
            accept="image/*"
          />
        </div>

        <div className="form-group">
          <label htmlFor='caption'>Caption</label>
          <input
            type='text'
            name="caption"
            placeholder="Write your caption..."
            required
          />
        </div>

        <button type="submit">Submit Post</button>
      </form>
    </section>
  )
}

export default CreatePost
