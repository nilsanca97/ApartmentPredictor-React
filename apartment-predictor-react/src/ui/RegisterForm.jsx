
export default function Form({formData}, {handleChange}, {handleSubmit}) {
 
  return (
    <>
      <h2>RegisterForm </h2>
      <form onSubmit={handleSubmit}>
        
            <label>
                Title:
                <input name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Price: 
                <input name="price" value={formData.price} onChange={handleChange} />
            </label>
            <label>
                Surface:
                <input name="surface" value={formData.surface} onChange={handleChange} />
            </label>
            <label>
                Rooms:
                <input name="rooms" value={formData.rooms} onChange={handleChange} />
            </label>
            <p>
                <b> TITLE: </b> {formData.title} <br />
                <b> PRICE: </b> {formData.price} <br />
                <b> SURFACE: </b> {formData.surface} <br />
                <b> ROOMS: </b> {formData.rooms} 
            </p>
            <button type="submit">CREATE</button>
        </form>
    </>
  );
}
