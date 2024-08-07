const UncontrolledForm = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <input type="text" name="hairColor" placeholder="Hair Color" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
