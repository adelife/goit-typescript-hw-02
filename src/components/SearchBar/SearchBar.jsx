import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (!values.search.trim()) {
      toast.error("Can't be empty!");
      return;
    }
    onSubmit(values.search);
    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.formInput}
            type='text'
            name='search'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            required
          />
          <button className={css.formBtn} type='submit'>
            <IoIosSearch size='16px' />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;