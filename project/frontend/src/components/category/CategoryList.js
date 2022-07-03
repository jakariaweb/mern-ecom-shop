import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { getCategories } from "../../functions/category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);

  const showCategories = () =>
    categories.map((c) => (
      <div
        key={c._id}
        className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
      >
        <Link to={`/category/${c.slug}`}>{c.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <DotLoader color="#1876f2" loading={loading} size={30} />
        ) : (
          showCategories()
        )}
      </div>
    </div>
  );
};

export default CategoryList;
