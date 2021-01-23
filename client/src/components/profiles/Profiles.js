import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "../profiles/ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const { profiles, loading } = profile;

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4> No profiles found ...</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;
