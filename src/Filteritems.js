import React from "react";
import "./Filteritems.css";

const Filteritems = () => {
  return (
    <>
      <form>
        <fieldset>
          <h5>Sort By</h5>
          <div classNameName="form-check">
            <input
              classNameName="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label classNameName=" form-check-label" or="flexRadioDefault2">
              Newest
            </label>
          </div>
          <div classNameName="form-check">
            <input
              classNameName="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label classNameName="form-check-label" for="flexRadioDefault1">
              Oldest
            </label>
          </div>
          <div classNameName="form-check">
            <input
              classNameName="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label classNameName="form-check-label" for="flexRadioDefault1">
              Most Liked
            </label>
          </div>
          <div classNameName="form-check">
            <input
              classNameName="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label classNameName="form-check-label" for="flexRadioDefault1">
              Least Liked
            </label>
          </div>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <h5 className="widget-title">Language</h5>

          <div className="nuron-form-check">
            <input type="checkbox" name="level" value="all" id="lang-check1" />
            <label for="lang-check1">All Language</label>
          </div>
          <div className="nuron-form-check">
            <input
              type="checkbox"
              name="language"
              id="lang-check-Russian"
              value="Russian"
            />
            <label for="lang-check-Russian">Russian</label>
          </div>
          <div className="nuron-form-check">
            <input
              type="checkbox"
              name="language"
              id="lang-check-Arabic"
              value="Arabic"
            />
            <label for="lang-check-Arabic">Arabic</label>
          </div>
          <div className="nuron-form-check">
            <input
              type="checkbox"
              name="language"
              id="lang-check-English"
              value="English"
            />
            <label for="lang-check-English">English</label>
          </div>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <h5>Eras</h5>
          <div>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <label for="coding">All Eras</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Pre Jim Crow"
              name="Pre Jim Crow"
              value="Pre Jim Crow"
            />
            <label for="Pre Jim Crow">Music</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Civil rights movement"
              name="Civil rights movement"
              value="Civil rights movement"
            />
            <label for="Civil rights movement">Civil rights movement</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Jim Crow"
              name="Jim Crow"
              value="Jim Crow"
            />
            <label for="Jim Crow">Jim Crow</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Black Lives Matter"
              name="Black Lives Matter"
              value="Black Lives Matter"
            />
            <label for="Black Lives Matter">Black Lives Matter</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Abolitionism"
              name="Abolitionism"
              value="Abolitionism"
            />
            <label for="Abolitionism">Abolitionism</label>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Filteritems;
